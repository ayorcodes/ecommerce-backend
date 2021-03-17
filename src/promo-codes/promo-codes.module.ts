import { Module } from '@nestjs/common';
import { PromoCodesService } from './promo-codes.service';
import { PromoCodesController } from './promo-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PromoCode } from './entities/promo-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PromoCode])],
  controllers: [PromoCodesController],
  providers: [PromoCodesService],
})
export class PromoCodesModule {}
