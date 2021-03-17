import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo-code.dto';
import { PromoCode } from './entities/promo-code.entity';

@Injectable()
export class PromoCodesService extends AbstractService {
  constructor(
    @InjectRepository(PromoCode)
    private readonly promoCodeRepo: Repository<PromoCode>,
  ) {
    super();
    this.repository = this.promoCodeRepo;
    this.name = 'Promo code';
  }
}
