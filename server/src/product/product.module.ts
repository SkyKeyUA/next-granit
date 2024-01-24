import { Module } from '@nestjs/common';
import { FileService } from 'src/file/file.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { User } from '@users/model/user.model';
import { FileModule } from '@file/file.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Product]), FileModule],
  controllers: [ProductController],
  providers: [ProductService, FileService],
})
export class ProductModule {}
