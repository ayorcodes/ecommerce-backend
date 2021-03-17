import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorsService extends AbstractService {
  constructor(
    @InjectRepository(Color) private readonly colorRepo: Repository<Color>,
  ) {
    super();
    this.repository = this.colorRepo;
    this.name = 'Color';
  }
}
