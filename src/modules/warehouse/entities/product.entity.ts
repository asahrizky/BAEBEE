import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { ProductType } from './product-type.entity';
import { ProductSize } from './product-size.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // "Kemeja Flanel Kotak-kotak"

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ default: 0 })
  totalStock: number; // Stock keseluruhan dari semua size

  @ManyToOne('ProductType', (productType: ProductType) => productType.products)
  @JoinColumn({ name: 'product_type_id' })
  productType: ProductType;

  @OneToMany('ProductSize', (size: ProductSize) => size.product, { cascade: true }) // Cascade akan menyimpan size otomatis
  sizes: ProductSize[];
}