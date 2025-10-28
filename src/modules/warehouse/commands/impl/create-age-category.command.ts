import { CreateAgeCategoryDto } from "../../dtos/create-age-category.dto";




export class CreateAgeCategoryCommand {
    constructor(public readonly createAgeCategoryDto: CreateAgeCategoryDto) {}
}