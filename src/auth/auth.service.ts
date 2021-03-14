import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { ChangePasswordDto } from './dto/change-password.dto';
import * as bcrypt from 'bcrypt';
import { Helper } from '../shared/helpers';
import { MailerService } from '@nestjs-modules/mailer';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
    private readonly usersService: UsersService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, phoneNumber } = registerDto;

    const isEmailExist = await this.userRepo.findOne({ where: { email } });
    const isPhoneNumberExist = await this.userRepo.findOne({
      where: { phoneNumber },
    });

    if (isEmailExist && isPhoneNumberExist) {
      throw new BadRequestException('Email and phone number already exists');
    }

    if (isEmailExist) {
      throw new BadRequestException('Email exists');
    }

    if (isPhoneNumberExist) {
      throw new BadRequestException('Phone number exists');
    }

    const response = this.userRepo.create(registerDto);
    const user = await this.userRepo.save(response);
    const payload = { id: user.id };
    const token = this.jwtService.sign(payload);
    // const payload = this.jwtService
    return { user: user.toJSON(), token };
  }

  async login(loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;
      const user = await this.userRepo.findOne({ where: { email } });
      if (user && (await user.comparePassword(password))) {
        const payload = { id: user.id };
        const token = this.jwtService.sign(payload);
        return { user: user.toJSON(), token };
      }
      throw new UnauthorizedException('Invalid Credentials');
    } catch (error) {
      throw new UnauthorizedException('Invalid Credentials');
    }
  }

  async changePassword(changePasswordDto: ChangePasswordDto, user: User) {
    const { currentPassword, newPassword } = changePasswordDto;
    if (!(await user.comparePassword(currentPassword))) {
      throw new BadRequestException('Current password is invalid');
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    return user.toJSON();
  }

  async forgotPassword(email: string) {
    // const { email } = user;
    const user = await this.usersService.findByEmail(email);
    const code = Helper.randomString(6).toUpperCase();

    user.token = code;
    await user.save();

    await this.mailerService
      .sendMail({
        to: email, // list of receivers
        // from: 'noreply@adeayo35@gmail.com', // sender address
        subject: 'Reset Password', // Subject line
        template: 'reset-password',
        context: {
          code,
        },
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
}
