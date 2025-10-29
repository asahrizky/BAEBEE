import { Repository, DataSource } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductType } from './entities/product-type.entity';
import { AgeCategory } from './entities/age-category.entity';
import { CreateProductTypeDto } from './dtos/create-product-type.dto';
import { GenderCategory } from './entities/gender-category.entity';
import { CreateGenderCategoryDto } from './dtos/create-gender-category.dto';
import { CreateAgeCategoryDto } from './dtos/create-age-category.dto';
export declare class WarehouseRepository {
    private readonly genderCategoryRepository;
    private readonly productRepository;
    private readonly productTypeRepository;
    private readonly ageCategoryRepository;
    private readonly dataSource;
    constructor(genderCategoryRepository: Repository<GenderCategory>, productRepository: Repository<Product>, productTypeRepository: Repository<ProductType>, ageCategoryRepository: Repository<AgeCategory>, dataSource: DataSource);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    createProductType(createProductTypeDto: CreateProductTypeDto): Promise<ProductType>;
    createGenderCategory(dto: CreateGenderCategoryDto): Promise<GenderCategory>;
    createAgeCategory(dto: CreateAgeCategoryDto): Promise<AgeCategory>;
}
