import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateAgeCategoryCommand} from "../impl/create-age-category.command";
import { WarehouseRepository } from "../../warehouse.repository";




@CommandHandler(CreateAgeCategoryCommand)
export class CreateAgeCategoryHandler implements ICommandHandler<CreateAgeCategoryCommand> {
    constructor(private readonly repository: WarehouseRepository) {}

    async execute(command: CreateAgeCategoryCommand) {
        return this.repository.createAgeCategory(command.createAgeCategoryDto)
    }
}