import { UserRole } from "src/shared/constants";
export declare class CreateEmployeeCommand {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly role: UserRole[];
    constructor(name: string, email: string, password: string, role: UserRole[]);
}
