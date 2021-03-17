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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController extends AbstractController {
  constructor(private readonly categoriesService: CategoriesService) {
    super();
    this.service = this.categoriesService;
    this.name = 'Category';
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return super.create(createCategoryDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return super.update(id, updateCategoryDto);
  }
}
