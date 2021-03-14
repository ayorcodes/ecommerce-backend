import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeorm.config';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './sub-categories/sub-categories.module';
import { BrandsModule } from './brands/brands.module';
import { ProductsModule } from './products/products.module';
import { ColorsModule } from './colors/colors.module';
import { SizesModule } from './sizes/sizes.module';
import { TagsModule } from './tags/tags.module';
import { PromoCodesModule } from './promo-codes/promo-codes.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { ReviewsModule } from './reviews/reviews.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { UploadsModule } from './uploads/uploads.module';
import { CartModule } from './cart/cart.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
      defaults: {
        from: 'info@onetime',
      },
      template: {
        dir: __dirname + 'templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    RolesModule,
    PermissionsModule,
    UsersModule,
    AuthModule,
    AddressesModule,
    CategoriesModule,
    SubCategoriesModule,
    BrandsModule,
    ProductsModule,
    ColorsModule,
    SizesModule,
    TagsModule,
    PromoCodesModule,
    OrdersModule,
    OrderItemsModule,
    ReviewsModule,
    WishlistModule,
    UploadsModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
