import { CreateEmployeeHandler } from './commands/handlers/create-employee.handler';
import { FindAllEmployeesHandler } from './queries/handlers/find-all-employees.handler';
import { FindEmployeeByIdHandler } from './queries/handlers/find-employee-by-id.handler';
import { UpdateEmployeeHandler } from './commands/handlers/update-employee.handler';
export declare const CommandHandlers: (typeof CreateEmployeeHandler | typeof UpdateEmployeeHandler)[];
export declare const QueryHandlers: (typeof FindAllEmployeesHandler | typeof FindEmployeeByIdHandler)[];
export declare class EmployeesModule {
}
