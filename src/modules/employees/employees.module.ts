import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { EmployeesController } from './employees.controller';
import { Employee } from './employees.entity';
import { CreateEmployeeHandler } from './commands/handlers/create-employee.handler';
import { EmployeesRepository } from './employees.repository';
import { FindAllEmployeesHandler } from './queries/handlers/find-all-employees.handler';
import { FindEmployeeByIdHandler } from './queries/handlers/find-employee-by-id.handler';
import { UpdateEmployeeHandler } from './commands/handlers/update-employee.handler';




export const CommandHandlers = [
    CreateEmployeeHandler,
    UpdateEmployeeHandler
];
export const QueryHandlers = [
    FindAllEmployeesHandler,
    FindEmployeeByIdHandler
]


@Module({
    imports: [
        TypeOrmModule.forFeature([Employee]),
        CqrsModule,
    ],
    controllers: [EmployeesController],
    providers: [
        EmployeesRepository,
        ...CommandHandlers,
        ...QueryHandlers,
    ],
})

export class EmployeesModule {}