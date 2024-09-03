import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
  Query,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 4 }]))
  create(
    @UploadedFiles()
    files: { images?: Express.Multer.File[] },
    @Body() dto: CreateProductDto,
  ) {
    const { images } = files;
    return this.productService.create(dto, images);
  }

  @Get('/all')
  getAll() {
    return this.productService.getAll();
  }

  @Get()
  getPage(@Query('limit') limit: number, @Query('page') page: number) {
    return this.productService.getPage(limit, page);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 4 }]))
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<CreateProductDto>,
    @UploadedFiles()
    files: { images?: Express.Multer.File[] },
  ) {
    const { images } = files;
    return this.productService.update(id, updateData, images);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
