import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenderCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;
}