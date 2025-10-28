import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { AgeCategory } from './age-category.entity';
import { Product } from './product.entity';

@Entity({ name: 'product_types' })
export class ProductType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // "Baju", "Celana", "Jumper", "Romper"

  @ManyToOne(() => AgeCategory, (ageCategory) => ageCategory.productTypes)
  @JoinColumn({ name: 'age_category_id' })
  ageCategory: AgeCategory;

  @OneToMany(() => Product, (product) => product.productType)
  products: Product[];
}