import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employee } from 'src/modules/employees/employees.entity';
import { GenderCategory } from 'src/modules/warehouse/entities/gender-category.entity';
import { AgeCategory } from 'src/modules/warehouse/entities/age-category.entity';
import { ProductType } from 'src/modules/warehouse/entities/product-type.entity';
import { Product } from 'src/modules/warehouse/entities/product.entity';
import { ProductSize } from 'src/modules/warehouse/entities/product-size.entity';

const config: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'pos_db.sqlite',
    entities: [
        Employee, 
        GenderCategory, 
        AgeCategory, 
        ProductType, 
        Product, 
        ProductSize
    ],
    synchronize: true,
    logging: true,
};

export default config;