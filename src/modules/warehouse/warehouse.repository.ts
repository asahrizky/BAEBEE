import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product } from './entities/product.entity';
import { ProductSize } from './entities/product-size.entity';
import { ProductType } from './entities/product-type.entity';
import { AgeCategory } from './entities/age-category.entity';
import { CreateProductTypeDto } from './dtos/create-product-type.dto';
import { GenderCategory } from './entities/gender-category.entity';
import { CreateGenderCategoryDto } from './dtos/create-gender-category.dto';
import { CreateAgeCategoryDto } from './dtos/create-age-category.dto';

@Injectable()
export class WarehouseRepository {
  constructor(
    @InjectRepository(GenderCategory)
    private readonly genderCategoryRepository: Repository<GenderCategory>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductType)
    private readonly productTypeRepository: Repository<ProductType>,
    @InjectRepository(AgeCategory)
    private readonly ageCategoryRepository: Repository<AgeCategory>,
    private readonly dataSource: DataSource, // Untuk transaksi
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const { name, imageUrl, productTypeId, sizes } = createProductDto;

    const productType = await this.productTypeRepository.findOneBy({ id: productTypeId });
    if (!productType) {
      throw new NotFoundException(`ProductType with ID "${productTypeId}" not found`);
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

  async createProductType(createProductTypeDto: CreateProductTypeDto): Promise<ProductType> {
    const {name, ageCategoryId} = createProductTypeDto;

    const ageCategory = await this.ageCategoryRepository.findOneBy({ id: ageCategoryId});
    if(!ageCategory) {
        throw new NotFoundException(`AgeCategory with ID "${ageCategoryId}" not found`);
    }

    const newProductType = this.productTypeRepository.create({
        name, 
        ageCategory,
    });

    return this.productTypeRepository.save(newProductType)
  }

  async createGenderCategory(dto: CreateGenderCategoryDto): Promise<GenderCategory> {
    const newGenderCategory = this. genderCategoryRepository.create(dto);
    return this.genderCategoryRepository.save(newGenderCategory);
  }

  async createAgeCategory(dto: CreateAgeCategoryDto): Promise<AgeCategory> {
    const {name, genderId} = dto;
    const gender = await this.genderCategoryRepository.findOneBy({ id: genderId});
    if(!gender) {
      throw new NotFoundException(`GenderCategory With ID "${genderId}" Not Found`);
    }
    const newAgeCategory = this.ageCategoryRepository.create({ name, gender });
    return this.ageCategoryRepository.save(newAgeCategory);
  }
}