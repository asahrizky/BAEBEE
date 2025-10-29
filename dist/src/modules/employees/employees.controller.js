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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const create_employee_dto_1 = require("./dtos/create-employee.dto");
const create_employee_command_1 = require("./commands/impl/create-employee.command");
const find_all_employees_query_1 = require("./queries/impl/find-all-employees.query");
const find_employee_by_id_query_1 = require("./queries/impl/find-employee-by-id.query");
const update_employee_dto_1 = require("./dtos/update-employee.dto");
const update_employee_command_1 = require("./commands/impl/update-employee.command");
let EmployeesController = class EmployeesController {
    commandBus;
    queryBus;
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async register(CreateEmployeeDto) {
        return this.commandBus.execute(new create_employee_command_1.CreateEmployeeCommand(CreateEmployeeDto.name, CreateEmployeeDto.email, CreateEmployeeDto.password, CreateEmployeeDto.role));
    }
    async findAll() {
        return this.queryBus.execute(new find_all_employees_query_1.FindAllEmployeesQuery());
    }
    async findOne(id) {
        return this.queryBus.execute(new find_employee_by_id_query_1.FindEmployeeByIdQuery(id));
    }
    async update(id, UpdateEmployeeDto) {
        return this.commandBus.execute(new update_employee_command_1.UpdateEmployeeCommand(id, UpdateEmployeeDto));
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)('Register'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ forbidNonWhitelisted: true, whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_employee_dto_1.UpdateEmployeeDto]),
    __metadata("design:returntype", Promise)
], EmployeesController.prototype, "update", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.CommandBus !== "undefined" && cqrs_1.CommandBus) === "function" ? _a : Object, typeof (_b = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _b : Object])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map