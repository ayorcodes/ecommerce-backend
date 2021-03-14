import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './entities/upload.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Upload]),
    MulterModule.register({
      dest: './uploads',
    }),
  ],
  controllers: [UploadsController],
  providers: [UploadsService]
})
export class UploadsModule {}
