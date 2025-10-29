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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductTypeHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_product_type_command_1 = require("../impl/create-product-type.command");
const warehouse_repository_1 = require("../../warehouse.repository");
let CreateProductTypeHandler = class CreateProductTypeHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        return this.repository.createProductType(command.createProductTypeDto);
    }
};
exports.CreateProductTypeHandler = CreateProductTypeHandler;
exports.CreateProductTypeHandler = CreateProductTypeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_product_type_command_1.CreateProductTypeCommand),
    __metadata("design:paramtypes", [warehouse_repository_1.WarehouseRepository])
], CreateProductTypeHandler);
//# sourceMappingURL=create-product-type.handler.js.map