import { IsString, IsNotEmpty, IsUUID } from "class-validator";


export class CreateProductTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string; // "Baju", "Celana", dll.
  
    @IsUUID()
    @IsNotEmpty()
    ageCategoryId: string;
}