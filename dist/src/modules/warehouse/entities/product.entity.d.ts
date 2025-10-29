import { ProductType } from './product-type.entity';
import { ProductSize } from './product-size.entity';
export declare class Product {
    id: string;
    name: string;
    imageUrl: string;
    totalStock: number;
    productType: ProductType;
    sizes: ProductSize[];
}
