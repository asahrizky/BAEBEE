import { EmployeesRepository } from "../../employees.repository";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { FindAllEmployeesQuery } from "../impl/find-all-employees.query";




@QueryHandler(FindAllEmployeesQuery)
export class FindAllEmployeesHandler implements IQueryHandler<FindAllEmployeesQuery> {
    constructor(private readonly repository: EmployeesRepository) {}

    async execute() {
        return this.repository.findAllEmployees();
    }
}