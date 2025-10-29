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
exports.UpdateEmployeeHandler = void 0;
const employees_repository_1 = require("../../employees.repository");
const update_employee_command_1 = require("../impl/update-employee.command");
const cqrs_1 = require("@nestjs/cqrs");
let UpdateEmployeeHandler = class UpdateEmployeeHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        return this.repository.updateEmployee(command.id, command.updateEmployeeDto);
    }
};
exports.UpdateEmployeeHandler = UpdateEmployeeHandler;
exports.UpdateEmployeeHandler = UpdateEmployeeHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_employee_command_1.UpdateEmployeeCommand),
    __metadata("design:paramtypes", [employees_repository_1.EmployeesRepository])
], UpdateEmployeeHandler);
//# sourceMappingURL=update-employee.handler.js.map