import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { CreateProductTypeCommand } from "../impl/create-product-type.command";
import { WarehouseRepository } from "../../warehouse.repository";

@CommandHandler(CreateProductTypeCommand) 
export class CreateProductTypeHandler implements ICommandHandler<CreateProductTypeCommand> {
    constructor(private readonly repository: WarehouseRepository) {}

    async execute(command: CreateProductTypeCommand) {
        return this.repository.createProductType(command.createProductTypeDto)
    }
}