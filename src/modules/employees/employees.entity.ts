import { UserRole } from "src/shared/constants";
import { Column, PrimaryGeneratedColumn, Entity, BeforeInsert, BeforeUpdate} from "typeorm";
import * as bcrypt from 'bcrypt';


@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({ type: 'simple-array', default: 'SELLER' })
    role: UserRole[];

    @Column({ default: true })
    isActive: boolean;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPasswordIfChanged() {
        if (this.password && (this.isNew || this.isPasswordChanged())) {
            this.password = await bcrypt.hash(this.password, 10); // TODO: Implement password hashing
        }
    }

    private isNew = true;
    private originalPassword = '';

    private isPasswordChanged():boolean {
        return true;
    }

    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}