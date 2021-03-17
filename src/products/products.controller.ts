import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AbstractController } from '../shared/controllers/abstract-controller.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController extends AbstractController {
  constructor(private readonly productsService: ProductsService) {
    super();
    this.service = this.productsService;
    this.name = 'Product';
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return super.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return super.update(id, updateProductDto);
  }
}
