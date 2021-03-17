import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Size } from './entities/size.entity';

@Injectable()
export class SizesService extends AbstractService {
  constructor(
    @InjectRepository(Size) private readonly sizeRepo: Repository<Size>,
  ) {
    super();
    this.repository = this.sizeRepo;
    this.name = 'Size';
  }
}
