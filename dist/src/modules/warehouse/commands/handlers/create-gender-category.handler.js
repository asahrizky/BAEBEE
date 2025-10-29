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
exports.CreateGenderCategoryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_gender_category_command_1 = require("../impl/create-gender-category.command");
const warehouse_repository_1 = require("../../warehouse.repository");
let CreateGenderCategoryHandler = class CreateGenderCategoryHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        return this.repository.createGenderCategory(command.createGenderCategoryDto);
    }
};
exports.CreateGenderCategoryHandler = CreateGenderCategoryHandler;
exports.CreateGenderCategoryHandler = CreateGenderCategoryHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_gender_category_command_1.CreateGenderCategoryCommand),
    __metadata("design:paramtypes", [warehouse_repository_1.WarehouseRepository])
], CreateGenderCategoryHandler);
//# sourceMappingURL=create-gender-category.handler.js.map