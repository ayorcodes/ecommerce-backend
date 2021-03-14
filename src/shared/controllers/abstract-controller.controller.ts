import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AbstractPaginationDto } from '../dto/abstract-pagination.dto';
import {
  sendListReponse,
  sendObjectResponse,
  sendPaginatedListReponse,
} from '../response.transformer';
import { BasicResponse } from '../response/basic-response';

export abstract class AbstractController {
  service: any;
  name: string;

  async create(@Body() payload: any, ...args: any) {
    const response = await this.service.create(payload);
    return sendObjectResponse(response, `${this.name} Created`);
    // return response;
  }

  @ApiResponse({ status: 200, isArray: true, type: BasicResponse })
  @Get()
  async findAll(@Query() pagination: AbstractPaginationDto, ...args: any) {
    const response = await this.service.findAll(pagination);
    return sendPaginatedListReponse(response, 'Success');
    // return response;
  }

  // @ApiResponse({ status: 200, type: AbstractResponse })
  // @ApiResponse({ status: 200, type: BasicResponse })
  @Get('/list/get')
  async list(...args: any) {
    const response = await this.service.list();
    return sendListReponse(response, 'Success');
  }

  // @ApiResponse({ status: 200, type: AbstractResponse })
  @ApiResponse({ status: 200, type: BasicResponse })
  @Get(':id')
  async findOne(@Param('id') id: string, ...args: any) {
    const response = await this.service.findOne(id);
    return sendObjectResponse(response, 'Success');
    // return response;
  }

  // @ApiResponse({ status: 200, type: AbstractResponse })
  @ApiResponse({ status: 200, type: BasicResponse })
  async update(@Param('id') id: string, @Body() payload: any, ...args: any) {
    const response = await this.service.update(id, payload);
    return sendObjectResponse(response, `${this.name} Updated`);
    // return response;
  }

  // @ApiResponse({ status: 200, type: AbstractResponse })
  @ApiResponse({ status: 200, type: BasicResponse })
  @Delete(':id')
  async remove(@Param('id') id: string, ...args: any) {
    const response = await this.service.remove(id);
    return sendObjectResponse(response, `${this.name} Deleted`);
    // return response;
  }
}
