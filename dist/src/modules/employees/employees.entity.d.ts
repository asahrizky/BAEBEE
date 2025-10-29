import { UserRole } from "src/shared/constants";
export declare class Employee {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole[];
    isActive: boolean;
    hashPasswordIfChanged(): Promise<void>;
    private isNew;
    private originalPassword;
    private isPasswordChanged;
    validatePassword(password: string): Promise<boolean>;
}
