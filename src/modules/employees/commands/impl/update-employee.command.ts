import { UpdateEmployeeDto } from "../../dtos/update-employee.dto";




export class UpdateEmployeeCommand {
    constructor(
        public readonly id: string,
        public readonly updateEmployeeDto: UpdateEmployeeDto,
    ) {}
}