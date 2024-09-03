import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  async create(
    dto: CreateProductDto,
    images: Express.Multer.File[],
  ): Promise<Product> {
    await this.checkUniqueTitle(dto.title);
    const fileName = await this.fileService.createFile(FileType.IMAGE, images);
    const product = await this.productModel.create({
      ...dto,
      images: fileName,
    });
    return product;
  }
  async getAll(): Promise<{ rows: Product[]; count: number }> {
    const products = await this.productModel.findAndCountAll();
    if (products) {
      return products;
    }
    throw new HttpException('Products are not found', HttpStatus.NOT_FOUND);
  }
  async getPage(limit, page): Promise<{ rows: Product[]; count: number }> {
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    const products = await this.productModel.findAndCountAll({
      limit,
      offset,
    });
    if (products) {
      return products;
    }
    throw new HttpException('Products are not found', HttpStatus.NOT_FOUND);
  }

  async getOne(id: number): Promise<Product> {
    const product = await this.productModel.findOne({ where: { id } });
    if (product) {
      return product;
    }
    throw new HttpException('Product is not found', HttpStatus.NOT_FOUND);
  }

  async update(
    id: number,
    updateData: Partial<CreateProductDto>,
    images?: Express.Multer.File[],
  ) {
    const product = await this.productModel.findOne({ where: { id } });
    if (!product) {
      throw new HttpException('Product is not found', HttpStatus.NOT_FOUND);
    }
    if (product.title !== updateData.title) {
      await this.checkUniqueTitle(updateData.title);
    }
    for (const image of product.images) {
      await this.fileService.removeFile(image);
    }
    const fileName = await this.fileService.createFile(FileType.IMAGE, images);
    await product.update({ ...updateData, images: fileName });
    return product;
  }

  async delete(id: number) {
    const product = await this.productModel.findOne({ where: { id } });
    if (product) {
      for (const image of product.images) {
        await this.fileService.removeFile(image);
      }
      await product.destroy();
      return product;
    }
    throw new HttpException('Product is not found', HttpStatus.NOT_FOUND);
  }

  private async checkUniqueTitle(title: string): Promise<void> {
    const existingTitle = await this.productModel.findOne({
      where: { title },
    });
    if (existingTitle) {
      throw new HttpException(
        'Product with this title already exists',
        HttpStatus.CONFLICT,
      );
    }
  }
}
