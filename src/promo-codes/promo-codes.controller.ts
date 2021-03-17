import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PromoCodesService } from './promo-codes.service';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { UpdatePromoCodeDto } from './dto/update-promo-code.dto';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Promo Codes')
@Controller('promo-codes')
export class PromoCodesController extends AbstractController {
  constructor(private readonly promoCodesService: PromoCodesService) {
    super();
    this.service = this.promoCodesService;
    this.name = 'Promo code';
  }

  @Post()
  create(@Body() createPromoCodeDto: CreatePromoCodeDto) {
    return super.create(createPromoCodeDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePromoCodeDto: UpdatePromoCodeDto,
  ) {
    return super.update(id, updatePromoCodeDto);
  }
}
