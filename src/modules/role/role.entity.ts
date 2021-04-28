import { type } from "node:os";

import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity('roles')
export class Role extends BaseEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 20, nullable: false })
    name: string;

    @Column({ type: 'text', nullable:false })
    description: string;

    @Column({ type: 'varchar', default: 'ACTIVE', length:8})
    status: string;

    // el name es el nombre en la BD
    @CreateDateColumn({ type: 'timestamp', name: 'created_at'}) 
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'update_at'}) 
    updatedAt: Date;

    // crea una tabla intermedia
    @ManyToMany( type => User, user => user.roles)
    @JoinColumn()
    users: User[];

}