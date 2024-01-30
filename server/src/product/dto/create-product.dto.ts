import { IsString } from 'class-validator';

class CreateProductDto {
  @IsString({ message: 'Value should be a string' })
  readonly title: string;
  @IsString({ message: 'Value should be a string' })
  readonly content: string;
  @IsString({ message: 'Value should be a string' })
  readonly subCatalogId: string;
  readonly userId: number;
}

export { CreateProductDto };
