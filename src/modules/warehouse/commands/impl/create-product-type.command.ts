import { CreateProductTypeDto } from "../../dtos/create-product-type.dto";




export class CreateProductTypeCommand {
    constructor(public readonly createProductTypeDto: CreateProductTypeDto) {}
}