import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService extends AbstractService {
  constructor(
    @InjectRepository(Brand) private readonly brandRepo: Repository<Brand>,
  ) {
    super();
    this.repository = this.brandRepo;
    this.name = 'Brand';
  }
}
