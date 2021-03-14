import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../shared/decorators/user.decorator';
import { User } from '../users/entities/user.entity';
import { LoginDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';
import { ChangePasswordDto } from './dto/change-password.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async create(@Body() registerDto: RegisterDto) {
    const response = await this.authService.register(registerDto);
    return response;
    // return sendObjectResponse(response, 'Account Created');
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
    // return sendObjectResponse(response, 'Login Success');
  }

  @Post('change-password')
  changePassword(
    @Body() changePasswordDto: ChangePasswordDto,
    @CurrentUser() user: User,
  ) {
    return this.authService.changePassword(changePasswordDto, user);
  }

  @Post('reset-password')
  forgotPassword(@Param('email') email: string) {
    return this.authService.forgotPassword(email);
  }

  // @ApiResponse({ status: 200, description: 'Get Test', type: User })
  // @Get(':id')
  // findOne(@Param('id') id: string): Response {
  //   // return this.authService.findOne(+id);
  //   // const user = new User();
  //   const test = new Response();
  //   return test
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
