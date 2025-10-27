import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { EmployeesRepository } from '../../employees.repository';
import { Employee } from '../../employees.entity';
import { CreateEmployeeCommand } from '../impl/create-employee.command';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler implements ICommandHandler<CreateEmployeeCommand> {
  constructor(
    private readonly employeeRepository: EmployeesRepository,
  ) {}

  async execute(command: CreateEmployeeCommand): Promise<Employee> {
    return this.employeeRepository.createEmployee(command);
  }
}