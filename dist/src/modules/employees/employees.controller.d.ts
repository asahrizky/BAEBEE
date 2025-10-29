import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateEmployeeDto } from "./dtos/create-employee.dto";
import { UpdateEmployeeDto } from "./dtos/update-employee.dto";
export declare class EmployeesController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    register(CreateEmployeeDto: CreateEmployeeDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, UpdateEmployeeDto: UpdateEmployeeDto): Promise<any>;
}
