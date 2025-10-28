import { IsNotEmpty, IsUUID, IsString } from "class-validator";




export class CreateAgeCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUUID()
    @IsNotEmpty()
    genderId: string;
}