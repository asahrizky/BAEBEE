"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const employees_entity_1 = require("./employees.entity");
let EmployeesRepository = class EmployeesRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async createEmployee(createEmployeeDto) {
        const { name, email, password, role } = createEmployeeDto;
        const existingEmployee = await this.repository.findOne({ where: { email } });
        if (existingEmployee) {
            throw new common_1.HttpException('Email already exists', common_1.HttpStatus.CONFLICT);
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newEmployee = this.repository.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        const savedEmployee = await this.repository.save(newEmployee);
        return savedEmployee;
    }
    async findAllEmployees() {
        const employees = await this.repository.find();
        return employees.map(employee => {
            return employee;
        });
    }
    async findEmployeeById(id) {
        const employee = await this.repository.findOneBy({ id: parseInt(id) });
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ID "${id}" not found`);
        }
        return employee;
    }
    async updateEmployee(id, updateEmployeeDto) {
        const employee = await this.repository.preload({
            id: parseInt(id),
            ...updateEmployeeDto,
        });
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ID "${id}" not found`);
        }
        const updatedEmployee = await this.repository.save(employee);
        return updatedEmployee;
    }
    async deleteEmployee(id) {
        const result = await this.repository.delete(parseInt(id));
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Employee with ID "${id}" not found`);
        }
    }
};
exports.EmployeesRepository = EmployeesRepository;
exports.EmployeesRepository = EmployeesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employees_entity_1.Employee)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EmployeesRepository);
//# sourceMappingURL=employees.repository.js.map