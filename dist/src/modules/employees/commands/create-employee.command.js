"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeCommand = void 0;
class CreateEmployeeCommand {
    name;
    email;
    password;
    role;
    constructor(name, email, password, role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
exports.CreateEmployeeCommand = CreateEmployeeCommand;
//# sourceMappingURL=create-employee.command.js.map