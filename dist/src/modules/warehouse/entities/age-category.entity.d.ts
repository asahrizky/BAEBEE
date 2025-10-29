import { GenderCategory } from './gender-category.entity';
import { ProductType } from './product-type.entity';
export declare class AgeCategory {
    id: string;
    name: string;
    gender: GenderCategory;
    productTypes: ProductType[];
}
