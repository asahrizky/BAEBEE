import { CreateProductDto } from "../../dtos/create-product.dto";
export declare class CreateProductCommand {
    readonly createProductDto: CreateProductDto;
    constructor(createProductDto: CreateProductDto);
}
