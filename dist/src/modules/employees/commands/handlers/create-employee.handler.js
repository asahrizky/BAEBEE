"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const employees_repository_1 = require("../../employees.repository");
const create_employee_command_1 = require("../impl/create-employee.command");
let CreateEmployeeHandler = class CreateEmployeeHandler {
    employeeRepository;
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async execute(command) {
        return this.employeeRepository.createEmployee(command);
    }
};
exports.CreateEmployeeHandler = CreateEmployeeHandler;
exports.CreateEmployeeHandler = CreateEmployeeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_employee_command_1.CreateEmployeeCommand),
    __metadata("design:paramtypes", [employees_repository_1.EmployeesRepository])
], CreateEmployeeHandler);
//# sourceMappingURL=create-employee.handler.js.map