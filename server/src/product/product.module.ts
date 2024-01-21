import { Module } from '@nestjs/common';
import { FileService } from 'src/file/file.service';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, FileService],
})
export class ProductModule {}
