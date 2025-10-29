import { ICommandHandler } from "@nestjs/cqrs";
import { CreateAgeCategoryCommand } from "../impl/create-age-category.command";
import { WarehouseRepository } from "../../warehouse.repository";
export declare class CreateAgeCategoryHandler implements ICommandHandler<CreateAgeCategoryCommand> {
    private readonly repository;
    constructor(repository: WarehouseRepository);
    execute(command: CreateAgeCategoryCommand): Promise<import("../../entities/age-category.entity").AgeCategory>;
}
