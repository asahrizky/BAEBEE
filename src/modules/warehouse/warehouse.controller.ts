import { Body, Post, ValidationPipe, Controller, UsePipes } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateProductDto } from "./dtos/create-product.dto";
import { CreateProductCommand } from "./commands/impl/create-product.command";
import { CreateProductTypeDto } from "./dtos/create-product-type.dto";
import { CreateProductTypeCommand } from "./commands/impl/create-product-type.command";
import { CreateGenderCategoryDto } from "./dtos/create-gender-category.dto";
import { CreateGenderCategoryCommand } from "./commands/impl/create-gender-category.command";
import { CreateAgeCategoryDto } from "./dtos/create-age-category.dto";
import { CreateAgeCategoryCommand } from "./commands/impl/create-age-category.command";


@Controller('warehouse')
export class WarehouseController {
    constructor(private readonly commandBus: CommandBus) {}

    
    @Post('products')
    @UsePipes(new ValidationPipe({whitelist: true}))
    async createProduct(@Body() CreateProductDto: CreateProductDto) {
        return this.commandBus.execute(new CreateProductCommand(CreateProductDto));
    }

    @Post('product-types')
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async createProductType(@Body() CreateProductTypeDto: CreateProductTypeDto) {
        return this.commandBus.execute(
            new CreateProductTypeCommand(CreateProductTypeDto),
        )
    }

    @Post('gender-categories')
    async createGenderCategory(@Body() dto: CreateGenderCategoryDto) {
        return this.commandBus.execute(new CreateGenderCategoryCommand(dto))
    }

    @Post('age-categories')
    async createAgeCategory(@Body() dto: CreateAgeCategoryDto) {
        return this.commandBus.execute(new CreateAgeCategoryCommand(dto));
    }

}
