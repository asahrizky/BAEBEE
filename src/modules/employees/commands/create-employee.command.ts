import { UserRole } from "src/shared/constants";


export class CreateEmployeeCommand {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
        public readonly role: UserRole[],
    ) {}
}