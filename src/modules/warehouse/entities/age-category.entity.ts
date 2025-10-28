import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { GenderCategory } from './gender-category.entity';
import { ProductType } from './product-type.entity';

@Entity({ name: 'age_categories' })
export class AgeCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // "Dewasa", "Remaja", "Anak", "Bayi"

  @ManyToOne('GenderCategory', (gender: GenderCategory) => gender.ageCategories)
  @JoinColumn({ name: 'gender_id' })
  gender: GenderCategory;

  @OneToMany('ProductType', (productType: ProductType) => productType.ageCategory)
  productTypes: ProductType[];
}