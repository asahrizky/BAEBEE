import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeormConfig from 'typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { EmployeesModule } from './modules/employees/employees.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';

@Module({
  imports: [
    CqrsModule.forRoot(),
    TypeOrmModule.forRoot(typeormConfig),
    EmployeesModule,
    WarehouseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
