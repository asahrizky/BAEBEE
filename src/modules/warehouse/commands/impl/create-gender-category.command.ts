import { CreateGenderCategoryDto } from "../../dtos/create-gender-category.dto";




export class CreateGenderCategoryCommand {
    constructor(public readonly createGenderCategoryDto: CreateGenderCategoryDto) {}
}