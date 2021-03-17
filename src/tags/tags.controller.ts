import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiTags } from '@nestjs/swagger';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';

@ApiTags('Tags')
@Controller('tags')
export class TagsController extends AbstractController {
  constructor(private readonly tagsService: TagsService) {
    super();
    this.service = this.tagsService;
    this.name = 'Tag';
  }

  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return super.create(createTagDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return super.update(id, updateTagDto);
  }
}
