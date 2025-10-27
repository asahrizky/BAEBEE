import { Body, Param, ParseUUIDPipe, UsePipes, ValidationPipe, Controller, Post, Get, Patch } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateEmployeeDto } from "./dtos/create-employee.dto";
import { CreateEmployeeCommand } from "./commands/impl/create-employee.command";
import { FindAllEmployeesQuery } from "./queries/impl/find-all-employees.query";
import { FindEmployeeByIdQuery } from "./queries/impl/find-employee-by-id.query";
import { UpdateEmployeeDto } from "./dtos/update-employee.dto";
import { UpdateEmployeeCommand } from "./commands/impl/update-employee.command";






@Controller('employees')
export class EmployeesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}


    @Post('Register')
    @UsePipes(new ValidationPipe({forbidNonWhitelisted: true, whitelist: true}))
    async register(@Body() CreateEmployeeDto: CreateEmployeeDto) {
        return this.commandBus.execute(
            new CreateEmployeeCommand(
                CreateEmployeeDto.name,
                CreateEmployeeDto.email,
                CreateEmployeeDto.password,
                CreateEmployeeDto.role
            ),
        );
    }

    @Get('list')
    async findAll() {
        return this.queryBus.execute(new FindAllEmployeesQuery());
    }

    @Get(':id')
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.queryBus.execute( new FindEmployeeByIdQuery(id));
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe ({ transform: true, whitelist: true }))
    async update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() UpdateEmployeeDto: UpdateEmployeeDto,
    ) 
    {
        return this.commandBus.execute(new UpdateEmployeeCommand(id, UpdateEmployeeDto));
    }
}