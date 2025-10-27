import { IsString, IsEmail, IsOptional, IsEnum, MinLength, ArrayNotEmpty } from 'class-validator';
import { UserRole } from 'src/shared/constants';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @IsEnum(UserRole, { each: true })
  @ArrayNotEmpty()
  @IsOptional()
  roles?: UserRole[];

  @IsOptional()
  isActive?: boolean;
}