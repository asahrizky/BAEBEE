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
exports.AgeCategory = void 0;
const typeorm_1 = require("typeorm");
const gender_category_entity_1 = require("./gender-category.entity");
let AgeCategory = class AgeCategory {
    id;
    name;
    gender;
    productTypes;
};
exports.AgeCategory = AgeCategory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AgeCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], AgeCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('GenderCategory', (gender) => gender.ageCategories),
    (0, typeorm_1.JoinColumn)({ name: 'gender_id' }),
    __metadata("design:type", gender_category_entity_1.GenderCategory)
], AgeCategory.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('ProductType', (productType) => productType.ageCategory),
    __metadata("design:type", Array)
], AgeCategory.prototype, "productTypes", void 0);
exports.AgeCategory = AgeCategory = __decorate([
    (0, typeorm_1.Entity)({ name: 'age_categories' })
], AgeCategory);
//# sourceMappingURL=age-category.entity.js.map