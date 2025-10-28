import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_sizes' })
export class ProductSize {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  size: string; // "S", "M", "L", "XL"

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  stock: number; // Stock per size ini

  @ManyToOne('Product', (product: Product) => product.sizes)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}