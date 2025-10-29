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
exports.GenderCategory = void 0;
const typeorm_1 = require("typeorm");
let GenderCategory = class GenderCategory {
    id;
    name;
    ageCategories;
};
exports.GenderCategory = GenderCategory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GenderCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], GenderCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('AgeCategory', (ageCategory) => ageCategory.gender),
    __metadata("design:type", Array)
], GenderCategory.prototype, "ageCategories", void 0);
exports.GenderCategory = GenderCategory = __decorate([
    (0, typeorm_1.Entity)({ name: 'gender_categories' })
], GenderCategory);
//# sourceMappingURL=gender-category.entity.js.map