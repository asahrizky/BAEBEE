import { UserRole } from "src/shared/constants";
export declare class CreateEmployeeDto {
    name: string;
    email: string;
    password: string;
    readonly role: UserRole[];
}
