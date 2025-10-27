import { ArrayNotEmpty, IsEmail, IsNotEmpty, IsString, MinLength, IsEnum} from "class-validator";
import { UserRole } from "src/shared/constants";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty({message: 'Name Should Not Be Empty'})
    name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Email Should Not Be Empty'})
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @IsEnum(UserRole, {each: true})
    @IsNotEmpty({ message: 'Role Should not be empty'})
    readonly role: UserRole[];

}