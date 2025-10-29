import { Repository } from 'typeorm';
import { Employee } from './employees.entity';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';
export declare class EmployeesRepository {
    private readonly repository;
    constructor(repository: Repository<Employee>);
    createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAllEmployees(): Promise<Employee[]>;
    findEmployeeById(id: string): Promise<Employee>;
    updateEmployee(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    deleteEmployee(id: string): Promise<void>;
}
