import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { WarehouseRepository } from "../../warehouse.repository";
import { CreateProductCommand } from "../impl/create-product.command";




@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
    constructor(private readonly repository: WarehouseRepository) {}

    async execute(command: CreateProductCommand) {
        return this.repository.createProduct(command.createProductDto);
    }
}

