import { EmployeesRepository } from "../../employees.repository";
import { UpdateEmployeeCommand } from "../impl/update-employee.command";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";




@CommandHandler(UpdateEmployeeCommand)
export class UpdateEmployeeHandler implements ICommandHandler<UpdateEmployeeCommand> {
    constructor(private readonly repository: EmployeesRepository) {}

    async execute(command: UpdateEmployeeCommand) {
        return this.repository.updateEmployee(command.id, command.updateEmployeeDto);
    }
}