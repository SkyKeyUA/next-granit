import { Injectable } from '@nestjs/common';
import { FileService } from 'src/file/file.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileType } from 'src/file/file.interface';
import { Product } from './model/product.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
    private fileService: FileService,
  ) {}
  async create(dto: CreateProductDto, image): Promise<Product> {
    const fileName = await this.fileService.createFile(FileType.IMAGE, image);
    const product = await this.productModel.create({
      ...dto,
      image: fileName,
    });
    return product;
  }
  async getAll(
    count = 10,
    offset = 0,
  ): Promise<{ rows: Product[]; count: number }> {
    const products = await this.productModel.findAndCountAll({
      limit: count,
      offset,
    });
    return products;
  }

  async getOne(id: number): Promise<Product> {
    const product = await this.productModel.findOne({ where: { id } });
    return product;
  }

  async update(id: number, updateData: Partial<CreateProductDto>) {
    const product = await this.productModel.update(updateData, {
      where: { id },
    });
    return updateData;
  }

  async delete(id: number) {
    const product = await this.productModel.findOne({ where: { id } });
    await product.destroy();
    return product;
  }
}
