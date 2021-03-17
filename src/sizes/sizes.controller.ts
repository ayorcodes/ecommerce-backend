import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SizesService } from './sizes.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { ApiTags } from '@nestjs/swagger';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';

@ApiTags('Sizes')
@Controller('sizes')
export class SizesController extends AbstractController {
  constructor(private readonly sizesService: SizesService) {
    super();
    this.service = this.sizesService;
    this.name = 'Size';
  }

  @Post()
  create(@Body() createSizeDto: CreateSizeDto) {
    return super.create(createSizeDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return super.update(id, updateSizeDto);
  }
}
