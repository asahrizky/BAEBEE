import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Employee } from './employees.entity';
import { CreateEmployeeDto } from './dtos/create-employee.dto';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';

@Injectable()
export class EmployeesRepository {

  constructor(
    @InjectRepository(Employee)
    private readonly repository: Repository<Employee>,
  ) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const { name, email, password, role } = createEmployeeDto;

    const existingEmployee = await this.repository.findOne({ where: { email } });
    if (existingEmployee) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newEmployee = this.repository.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const savedEmployee = await this.repository.save(newEmployee);

    return savedEmployee;
  }

  async findAllEmployees(): Promise<Employee[]> {
    const employees = await this.repository.find();
    return employees.map(employee => {
        return employee;
    })
  }

  async findEmployeeById(id: string): Promise<Employee> {
    const employee = await this.repository.findOneBy({ id: parseInt(id) });
    if(!employee) {
        throw new NotFoundException(`Employee with ID "${id}" not found`);
    }
    return employee;
  }
 
  async updateEmployee(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    // Cari employee, preload akan mengambil data yang ada lalu menggabungkannya dengan data baru
    const employee = await this.repository.preload({
        id: parseInt(id),
        ...updateEmployeeDto,
    });

    if (!employee) {
        throw new NotFoundException(`Employee with ID "${id}" not found`);
    }
    
    const updatedEmployee = await this.repository.save(employee);
    return updatedEmployee;
  }

  // 5. DELETE
  async deleteEmployee(id: string): Promise<void> {
    const result = await this.repository.delete(parseInt(id));
    if (result.affected === 0) {
      throw new NotFoundException(`Employee with ID "${id}" not found`);
    }
  }
}