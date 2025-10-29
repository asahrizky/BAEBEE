import { AgeCategory } from './age-category.entity';
import { Product } from './product.entity';
export declare class ProductType {
    id: string;
    name: string;
    ageCategory: AgeCategory;
    products: Product[];
}
