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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const product_type_entity_1 = require("./entities/product-type.entity");
const age_category_entity_1 = require("./entities/age-category.entity");
const gender_category_entity_1 = require("./entities/gender-category.entity");
let WarehouseRepository = class WarehouseRepository {
    genderCategoryRepository;
    productRepository;
    productTypeRepository;
    ageCategoryRepository;
    dataSource;
    constructor(genderCategoryRepository, productRepository, productTypeRepository, ageCategoryRepository, dataSource) {
        this.genderCategoryRepository = genderCategoryRepository;
        this.productRepository = productRepository;
        this.productTypeRepository = productTypeRepository;
        this.ageCategoryRepository = ageCategoryRepository;
        this.dataSource = dataSource;
    }
    async createProduct(createProductDto) {
        const { name, imageUrl, productTypeId, sizes } = createProductDto;
        const productType = await this.productTypeRepository.findOneBy({ id: productTypeId });
        if (!productType) {
            throw new common_1.NotFoundException(`ProductType with ID "${productTypeId}" not found`);
        }
        const totalStock = sizes.reduce((sum, current) => sum + current.stock, 0);
        const product = this.productRepository.create({
            name,
            imageUrl,
            productType,
            totalStock,
            sizes: sizes,
        });
        return this.productRepository.save(product);
    }
    async createProductType(createProductTypeDto) {
        const { name, ageCategoryId } = createProductTypeDto;
        const ageCategory = await this.ageCategoryRepository.findOneBy({ id: ageCategoryId });
        if (!ageCategory) {
            throw new common_1.NotFoundException(`AgeCategory with ID "${ageCategoryId}" not found`);
        }
        const newProductType = this.productTypeRepository.create({
            name,
            ageCategory,
        });
        return this.productTypeRepository.save(newProductType);
    }
    async createGenderCategory(dto) {
        const newGenderCategory = this.genderCategoryRepository.create(dto);
        return this.genderCategoryRepository.save(newGenderCategory);
    }
    async createAgeCategory(dto) {
        const { name, genderId } = dto;
        const gender = await this.genderCategoryRepository.findOneBy({ id: genderId });
        if (!gender) {
            throw new common_1.NotFoundException(`GenderCategory With ID "${genderId}" Not Found`);
        }
        const newAgeCategory = this.ageCategoryRepository.create({ name, gender });
        return this.ageCategoryRepository.save(newAgeCategory);
    }
};
exports.WarehouseRepository = WarehouseRepository;
exports.WarehouseRepository = WarehouseRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gender_category_entity_1.GenderCategory)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(2, (0, typeorm_1.InjectRepository)(product_type_entity_1.ProductType)),
    __param(3, (0, typeorm_1.InjectRepository)(age_category_entity_1.AgeCategory)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _e : Object])
], WarehouseRepository);
//# sourceMappingURL=warehouse.repository.js.map