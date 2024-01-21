import { Injectable } from '@nestjs/common';
import { Product } from './schemas/product.schema';
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

  async getOne(id: number): Promise<Product> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async update(id: number, updateData: Partial<CreateProductDto>) {
    const product = await this.productModel.updateOne({ _id: id }, updateData);
    return updateData;
  }

  async delete(id: number) {
    const product = await this.productModel.findByIdAndDelete(id);
    return product;
  }
}
