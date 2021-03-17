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
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';

@ApiTags('Colors')
@Controller('colors')
export class ColorsController extends AbstractController {
  constructor(private readonly colorsService: ColorsService) {
    super();
    this.service = this.colorsService;
    this.name = 'Color';
  }

  @Post()
  create(@Body() createColorDto: CreateColorDto) {
    return super.create(createColorDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    return super.update(id, updateColorDto);
  }
}
