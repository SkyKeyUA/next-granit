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
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(
    @UploadedFiles()
    files: { image?: Express.Multer.File[] },
    @Body() dto: CreateProductDto,
  ) {
    const { image } = files;
    return this.productService.create(dto, image[0]);
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
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<CreateProductDto>,
    @UploadedFiles()
    files: { image?: Express.Multer.File[] },
  ) {
    const { image } = files;
    return this.productService.update(id, updateData, image[0]);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
