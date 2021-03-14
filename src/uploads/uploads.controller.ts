import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { UploadsService } from './uploads.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from '../shared/helpers';
import { AuthGuard } from '../shared/guards/auth.guard';

@ApiTags('Uploads')
@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: Helper.editFileName,
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: any) {
    const payload = {
      originalName: file.originalname,
      fileName: file.filename,
    };

    const response = await this.uploadsService.create(payload);
    return response;
    // return sendObjectResponse(response, 'File Uploaded');
  }

  @Get(':filepath')
  seeUploadedFile(@Param('filepath') file: any, @Res() res: any) {
    return res.sendFile(file, { root: './uploads' });
  }
}
