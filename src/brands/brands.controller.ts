import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController extends AbstractController {
  constructor(private readonly brandsService: BrandsService) {
    super();
    this.service = this.brandsService;
  }

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return super.create(createBrandDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return super.update(id, updateBrandDto);
  }
}
