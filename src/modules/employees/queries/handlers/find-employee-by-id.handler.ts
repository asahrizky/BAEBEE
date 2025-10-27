import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindEmployeeByIdQuery } from "../impl/find-employee-by-id.query";
import { EmployeesRepository } from "../../employees.repository";

@QueryHandler(FindEmployeeByIdQuery)
export class FindEmployeeByIdHandler implements IQueryHandler<FindEmployeeByIdQuery> {
    constructor(private readonly repository: EmployeesRepository) {}

    async execute(query: FindEmployeeByIdQuery): Promise<any> {
        return this.repository.findEmployeeById(query.id);
    }
}