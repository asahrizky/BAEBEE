import { UpdateEmployeeDto } from "../../dtos/update-employee.dto";
export declare class UpdateEmployeeCommand {
    readonly id: string;
    readonly updateEmployeeDto: UpdateEmployeeDto;
    constructor(id: string, updateEmployeeDto: UpdateEmployeeDto);
}
