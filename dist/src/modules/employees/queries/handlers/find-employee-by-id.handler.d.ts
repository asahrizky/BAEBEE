import { IQueryHandler } from "@nestjs/cqrs";
import { FindEmployeeByIdQuery } from "../impl/find-employee-by-id.query";
import { EmployeesRepository } from "../../employees.repository";
export declare class FindEmployeeByIdHandler implements IQueryHandler<FindEmployeeByIdQuery> {
    private readonly repository;
    constructor(repository: EmployeesRepository);
    execute(query: FindEmployeeByIdQuery): Promise<any>;
}
