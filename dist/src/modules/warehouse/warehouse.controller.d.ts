import { CommandBus } from "@nestjs/cqrs";
import { CreateProductDto } from "./dtos/create-product.dto";
import { CreateProductTypeDto } from "./dtos/create-product-type.dto";
import { CreateGenderCategoryDto } from "./dtos/create-gender-category.dto";
import { CreateAgeCategoryDto } from "./dtos/create-age-category.dto";
export declare class WarehouseController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    createProduct(CreateProductDto: CreateProductDto): Promise<any>;
    createProductType(CreateProductTypeDto: CreateProductTypeDto): Promise<any>;
    createGenderCategory(dto: CreateGenderCategoryDto): Promise<any>;
    createAgeCategory(dto: CreateAgeCategoryDto): Promise<any>;
}
