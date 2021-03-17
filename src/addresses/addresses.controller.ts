import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../shared/decorators/user.decorator';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import {
  sendObjectResponse,
  sendPaginatedListReponse,
} from '../shared/response.transformer';
import { User } from '../users/entities/user.entity';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@ApiTags('Address')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto, @CurrentUser() user: User) {
    const response = await this.addressesService.create(createAddressDto, user);
    return sendObjectResponse(response, 'Address Created');
  }

  @Get()
  async findAll(@Query() options: AbstractPaginationDto) {
    const response = await this.addressesService.findAll(options);
    return sendPaginatedListReponse(response, 'Success');
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.addressesService.findOne(id);
    return sendObjectResponse(response, 'Success');
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
    @CurrentUser() user: User,
  ) {
    const response = await this.addressesService.update(
      id,
      updateAddressDto,
      user,
    );
    return sendObjectResponse(response, 'Address Updated');
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: User) {
    const response = await this.addressesService.remove(id, user);
    return sendObjectResponse(response, 'Address Deleted');
  }
}
