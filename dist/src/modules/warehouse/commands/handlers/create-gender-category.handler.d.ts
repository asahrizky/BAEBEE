import { ICommandHandler } from "@nestjs/cqrs";
import { CreateGenderCategoryCommand } from "../impl/create-gender-category.command";
import { WarehouseRepository } from "../../warehouse.repository";
export declare class CreateGenderCategoryHandler implements ICommandHandler<CreateGenderCategoryCommand> {
    private readonly repository;
    constructor(repository: WarehouseRepository);
    execute(command: CreateGenderCategoryCommand): Promise<import("../../entities/gender-category.entity").GenderCategory>;
}
