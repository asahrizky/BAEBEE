import { EmployeesRepository } from "../../employees.repository";
import { UpdateEmployeeCommand } from "../impl/update-employee.command";
import { ICommandHandler } from "@nestjs/cqrs";
export declare class UpdateEmployeeHandler implements ICommandHandler<UpdateEmployeeCommand> {
    private readonly repository;
    constructor(repository: EmployeesRepository);
    execute(command: UpdateEmployeeCommand): Promise<import("../../employees.entity").Employee>;
}
