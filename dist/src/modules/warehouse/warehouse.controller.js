"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_product_dto_1 = require("./dtos/create-product.dto");
const create_product_command_1 = require("./commands/impl/create-product.command");
const create_product_type_dto_1 = require("./dtos/create-product-type.dto");
const create_product_type_command_1 = require("./commands/impl/create-product-type.command");
const create_gender_category_dto_1 = require("./dtos/create-gender-category.dto");
const create_gender_category_command_1 = require("./commands/impl/create-gender-category.command");
const create_age_category_dto_1 = require("./dtos/create-age-category.dto");
const create_age_category_command_1 = require("./commands/impl/create-age-category.command");
let WarehouseController = class WarehouseController {
    commandBus;
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async createProduct(CreateProductDto) {
        return this.commandBus.execute(new create_product_command_1.CreateProductCommand(CreateProductDto));
    }
    async createProductType(CreateProductTypeDto) {
        return this.commandBus.execute(new create_product_type_command_1.CreateProductTypeCommand(CreateProductTypeDto));
    }
    async createGenderCategory(dto) {
        return this.commandBus.execute(new create_gender_category_command_1.CreateGenderCategoryCommand(dto));
    }
    async createAgeCategory(dto) {
        return this.commandBus.execute(new create_age_category_command_1.CreateAgeCategoryCommand(dto));
    }
};
exports.WarehouseController = WarehouseController;
__decorate([
    (0, common_1.Post)('products'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('product-types'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_type_dto_1.CreateProductTypeDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createProductType", null);
__decorate([
    (0, common_1.Post)('gender-categories'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gender_category_dto_1.CreateGenderCategoryDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createGenderCategory", null);
__decorate([
    (0, common_1.Post)('age-categories'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_age_category_dto_1.CreateAgeCategoryDto]),
    __metadata("design:returntype", Promise)
], WarehouseController.prototype, "createAgeCategory", null);
exports.WarehouseController = WarehouseController = __decorate([
    (0, common_1.Controller)('warehouse'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object])
], WarehouseController);
//# sourceMappingURL=warehouse.controller.js.map