import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SubCategoriesService } from './sub-categories.service';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sub Categories')
@Controller('sub-categories')
export class SubCategoriesController extends AbstractController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {
    super();
    this.service = this.subCategoriesService;
    this.name = 'Sub category';
  }

  @Post()
  create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return super.create(createSubCategoryDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubCategoryDto: UpdateSubCategoryDto,
  ) {
    return super.update(id, updateSubCategoryDto);
  }
}
