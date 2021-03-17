import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController extends AbstractController {
  constructor(private readonly reviewsService: ReviewsService) {
    super();
    this.service = this.reviewsService;
    this.name = 'Review';
  }

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return super.create(createReviewDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return super.update(id, updateReviewDto);
  }
}
