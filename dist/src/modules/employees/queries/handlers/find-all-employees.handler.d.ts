import { EmployeesRepository } from "../../employees.repository";
import { IQueryHandler } from "@nestjs/cqrs";
import { FindAllEmployeesQuery } from "../impl/find-all-employees.query";
export declare class FindAllEmployeesHandler implements IQueryHandler<FindAllEmployeesQuery> {
    private readonly repository;
    constructor(repository: EmployeesRepository);
    execute(): Promise<import("../../employees.entity").Employee[]>;
}
