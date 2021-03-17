import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService extends AbstractService {
  constructor(
    @InjectRepository(Review) private readonly reviewRepo: Repository<Review>,
  ) {
    super();
    this.repository = this.reviewRepo;
    this.name = 'Review';
  }
}
