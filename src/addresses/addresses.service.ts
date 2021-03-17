import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { AbstractService } from '../shared/services/abstract-service.service';
import { User } from '../users/entities/user.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService extends AbstractService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {
    super();
    this.repository = this.addressRepository;
    this.name = 'Address';
  }

  create(createAddressDto: CreateAddressDto, user: User) {
    createAddressDto.user = user;
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }

  findAll(options: AbstractPaginationDto) {
    return PaginateItems(this.addressRepository, options);
  }

  findAllByUser(options: AbstractPaginationDto, user: User) {
    return PaginateItems(this.addressRepository, options, { where: { user } });
  }

  async findOneByUser(id: string, user: User) {
    const response = await this.addressRepository.findOne({
      where: { id, user },
    });
    if (!response) {
      throw new NotFoundException(`${this.name} Not Found`);
    }

    return response;
  }

  async update(id: string, updateAddressDto: UpdateAddressDto, user: User) {
    await this.findOneByUser(id, user);
    await this.addressRepository.update(id, updateAddressDto);
    return this.findOneByUser(id, user);
  }

  async remove(id: string, user: User) {
    await this.findOneByUser(id, user);
    await this.addressRepository.delete(id);
    return null;
  }
}
