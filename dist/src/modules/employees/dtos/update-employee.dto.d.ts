import { UserRole } from 'src/shared/constants';
export declare class UpdateEmployeeDto {
    name?: string;
    email?: string;
    password?: string;
    roles?: UserRole[];
    isActive?: boolean;
}
