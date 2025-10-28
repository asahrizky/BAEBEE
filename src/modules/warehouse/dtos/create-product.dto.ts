import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, ValidateNested, IsNumber, Min, IsUrl, IsUUID } from 'class-validator';


class ProductSizeDto {
  @IsString()
  @IsNotEmpty()
  size: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;

 
  @IsUUID()
  @IsNotEmpty()
  productTypeId: string;

  @IsArray()
  @ValidateNested({ each: true }) 
  @Type(() => ProductSizeDto) 
  sizes: ProductSizeDto[];
}