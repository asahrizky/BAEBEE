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
exports.FindEmployeeByIdHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const find_employee_by_id_query_1 = require("../impl/find-employee-by-id.query");
const employees_repository_1 = require("../../employees.repository");
let FindEmployeeByIdHandler = class FindEmployeeByIdHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(query) {
        return this.repository.findEmployeeById(query.id);
    }
};
exports.FindEmployeeByIdHandler = FindEmployeeByIdHandler;
exports.FindEmployeeByIdHandler = FindEmployeeByIdHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_employee_by_id_query_1.FindEmployeeByIdQuery),
    __metadata("design:paramtypes", [employees_repository_1.EmployeesRepository])
], FindEmployeeByIdHandler);
//# sourceMappingURL=find-employee-by-id.handler.js.map