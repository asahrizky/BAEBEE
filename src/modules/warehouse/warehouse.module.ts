import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CqrsModule } from "@nestjs/cqrs";

import { AgeCategory } from "./entities/age-category.entity";
import { GenderCategory } from "./entities/gender-category.entity";
import { ProductSize } from "./entities/product-size.entity";
import { ProductType } from "./entities/product-type.entity";
import { Product } from "./entities/product.entity";

import { WarehouseController } from "./warehouse.controller";
import { WarehouseRepository } from "./warehouse.repository";
import { CreateProductHandler } from "./commands/handlers/create-product.handler";
import { CreateGenderCategoryHandler } from "./commands/handlers/create-gender-category.handler";
import { CreateAgeCategoryHandler } from "./commands/handlers/create-age-category.handler";
import { CreateProductTypeHandler } from "./commands/handlers/create-product-type.handler";

const CommandHandlers = [
    CreateProductHandler,
    CreateGenderCategoryHandler,
    CreateAgeCategoryHandler,
    CreateProductTypeHandler
];
@Module({
    imports: [
        TypeOrmModule.forFeature([
            AgeCategory,
            GenderCategory,
            ProductSize,
            ProductType,
            Product
        ]),
        CqrsModule
    ],
    controllers: [WarehouseController],
    providers: [WarehouseRepository, ...CommandHandlers],
})
export class WarehouseModule {}