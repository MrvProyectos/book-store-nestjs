import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// La clase es singular, la tabla es plural
@Entity('user_details')
export class UserDetail extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 50, nullable: true})
    name: string;

    @Column({ type: 'varchar', nullable: true})
    lastname: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length:8})
    status: string;

    // el name es el nombre en la BD
    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true}) 
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'update_at', nullable: true}) 
    updatedAt: Date;
}