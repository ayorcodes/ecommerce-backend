import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { Upload } from './entities/upload.entity';

@Injectable()
export class UploadsService {
  constructor(
    @InjectRepository(Upload) private readonly uploadRepo: Repository<Upload>,
  ) {}

  async create(file: CreateUploadDto) {
    const response = this.uploadRepo.create(file);
    await this.uploadRepo.save(response);
    return this.uploadRepo.findOne(response.id);
  }
}
