import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { FileService } from 'src/file/file.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileType } from 'src/file/file.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    private fileService: FileService,
  ) {}
  async create(dto: CreateProductDto, picture): Promise<Product> {
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const product = await this.productModel.create({
      ...dto,
      picture: picturePath,
    });
    return product;
  }
  async getAll(count = 10, offset = 0): Promise<Product[]> {
    const products = await this.productModel.find().skip(offset).limit(count);
    return products;
  }
}
