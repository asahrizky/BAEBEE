import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateGenderCategoryCommand } from "../impl/create-gender-category.command";
import { WarehouseRepository } from "../../warehouse.repository";




@CommandHandler(CreateGenderCategoryCommand)
export class CreateGenderCategoryHandler implements ICommandHandler<CreateGenderCategoryCommand> {
    constructor(private readonly repository: WarehouseRepository) {}

    async execute(command: CreateGenderCategoryCommand){
        return this.repository.createGenderCategory(command.createGenderCategoryDto);
    }
}