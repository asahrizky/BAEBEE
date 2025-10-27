import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employee } from 'src/modules/employees/employees.entity';

const config: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: 'pos_db.sqlite',
    entities: [Employee],
    synchronize: true,
    logging: true,
};

export default config;