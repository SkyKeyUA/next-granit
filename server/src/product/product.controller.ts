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
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  create(
    @UploadedFiles()
    files: { picture?: Express.Multer.File[] },
    @Body() dto: CreateProductDto,
  ) {
    const { picture } = files;
    return this.productService.create(dto, picture[0]);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.productService.getAll(count, offset);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.productService.getOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateData: Partial<CreateProductDto>,
  ) {
    return this.productService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
