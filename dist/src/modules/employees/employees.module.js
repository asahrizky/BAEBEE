"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesModule = exports.QueryHandlers = exports.CommandHandlers = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cqrs_1 = require("@nestjs/cqrs");
const employees_controller_1 = require("./employees.controller");
const employees_entity_1 = require("./employees.entity");
const create_employee_handler_1 = require("./commands/handlers/create-employee.handler");
const employees_repository_1 = require("./employees.repository");
const find_all_employees_handler_1 = require("./queries/handlers/find-all-employees.handler");
const find_employee_by_id_handler_1 = require("./queries/handlers/find-employee-by-id.handler");
const update_employee_handler_1 = require("./commands/handlers/update-employee.handler");
exports.CommandHandlers = [
    create_employee_handler_1.CreateEmployeeHandler,
    update_employee_handler_1.UpdateEmployeeHandler
];
exports.QueryHandlers = [
    find_all_employees_handler_1.FindAllEmployeesHandler,
    find_employee_by_id_handler_1.FindEmployeeByIdHandler
];
let EmployeesModule = class EmployeesModule {
};
exports.EmployeesModule = EmployeesModule;
exports.EmployeesModule = EmployeesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([employees_entity_1.Employee]),
            cqrs_1.CqrsModule,
        ],
        controllers: [employees_controller_1.EmployeesController],
        providers: [
            employees_repository_1.EmployeesRepository,
            ...exports.CommandHandlers,
            ...exports.QueryHandlers,
        ],
    })
], EmployeesModule);
//# sourceMappingURL=employees.module.js.map