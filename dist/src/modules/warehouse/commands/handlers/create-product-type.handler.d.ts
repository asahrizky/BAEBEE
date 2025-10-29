import { ICommandHandler } from "@nestjs/cqrs";
import { CreateProductTypeCommand } from "../impl/create-product-type.command";
import { WarehouseRepository } from "../../warehouse.repository";
export declare class CreateProductTypeHandler implements ICommandHandler<CreateProductTypeCommand> {
    private readonly repository;
    constructor(repository: WarehouseRepository);
    execute(command: CreateProductTypeCommand): Promise<import("../../entities/product-type.entity").ProductType>;
}
