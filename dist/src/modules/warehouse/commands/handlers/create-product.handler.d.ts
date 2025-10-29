import { ICommandHandler } from "@nestjs/cqrs";
import { WarehouseRepository } from "../../warehouse.repository";
import { CreateProductCommand } from "../impl/create-product.command";
export declare class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
    private readonly repository;
    constructor(repository: WarehouseRepository);
    execute(command: CreateProductCommand): Promise<import("../../entities/product.entity").Product>;
}
