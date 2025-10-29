declare class ProductSizeDto {
    size: string;
    price: number;
    stock: number;
}
export declare class CreateProductDto {
    name: string;
    imageUrl: string;
    productTypeId: string;
    sizes: ProductSizeDto[];
}
export {};
