import { ICommandHandler } from '@nestjs/cqrs';
import { EmployeesRepository } from '../../employees.repository';
import { Employee } from '../../employees.entity';
import { CreateEmployeeCommand } from '../impl/create-employee.command';
export declare class CreateEmployeeHandler implements ICommandHandler<CreateEmployeeCommand> {
    private readonly employeeRepository;
    constructor(employeeRepository: EmployeesRepository);
    execute(command: CreateEmployeeCommand): Promise<Employee>;
}
