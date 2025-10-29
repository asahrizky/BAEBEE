"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cqrs_1 = require("@nestjs/cqrs");
const age_category_entity_1 = require("./entities/age-category.entity");
const gender_category_entity_1 = require("./entities/gender-category.entity");
const product_size_entity_1 = require("./entities/product-size.entity");
const product_type_entity_1 = require("./entities/product-type.entity");
const product_entity_1 = require("./entities/product.entity");
const warehouse_controller_1 = require("./warehouse.controller");
const warehouse_repository_1 = require("./warehouse.repository");
const create_product_handler_1 = require("./commands/handlers/create-product.handler");
const create_gender_category_handler_1 = require("./commands/handlers/create-gender-category.handler");
const create_age_category_handler_1 = require("./commands/handlers/create-age-category.handler");
const create_product_type_handler_1 = require("./commands/handlers/create-product-type.handler");
const CommandHandlers = [
    create_product_handler_1.CreateProductHandler,
    create_gender_category_handler_1.CreateGenderCategoryHandler,
    create_age_category_handler_1.CreateAgeCategoryHandler,
    create_product_type_handler_1.CreateProductTypeHandler
];
let WarehouseModule = class WarehouseModule {
};
exports.WarehouseModule = WarehouseModule;
exports.WarehouseModule = WarehouseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                age_category_entity_1.AgeCategory,
                gender_category_entity_1.GenderCategory,
                product_size_entity_1.ProductSize,
                product_type_entity_1.ProductType,
                product_entity_1.Product
            ]),
            cqrs_1.CqrsModule
        ],
        controllers: [warehouse_controller_1.WarehouseController],
        providers: [warehouse_repository_1.WarehouseRepository, ...CommandHandlers],
    })
], WarehouseModule);
//# sourceMappingURL=warehouse.module.js.map