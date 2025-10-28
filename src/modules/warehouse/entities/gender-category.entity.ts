import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AgeCategory } from './age-category.entity';

@Entity({ name: 'gender_categories' })
export class GenderCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string; // "Male" atau "Female"

  @OneToMany('AgeCategory', (ageCategory: AgeCategory) => ageCategory.gender)
  ageCategories: AgeCategory[];
}