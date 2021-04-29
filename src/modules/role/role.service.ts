import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { RoleRepository } from './role.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
// import { MapperService } from '../../shared/mapper.service';
import { getConnection } from 'typeorm';

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(RoleRepository)
        private readonly _roleRepository: RoleRepository,
        // private readonly _mapperService: MapperService,
    ){}

    // peticion de llamada por ID.
    async get(id: number): Promise<Role> {
        if (!id) {
            throw new BadRequestException('Se debe enviar un ID de identidad');
        }
        const regRole: Role = await this._roleRepository.findOne(id, {where: { status: 'ACTIVE'},});
        if (!regRole) {
            throw new NotFoundException();
        }

        return regRole;
    }

    // peticion de llamada de todos los registros. Devuelve un array
    async getAll(): Promise<Role[]> {
        const regRoles: Role[] = await this._roleRepository.find({where: { status: 'ACTIVE' },});

        return regRoles;
    }

    // Crear un usuario
    async create(role: Role): Promise<Role> {
        const saveRole: Role = await this._roleRepository.save(role);
        return saveRole;
    }

    // Actualiza 
    async update(id: number, role: Role): Promise<void> {
        await this._roleRepository.update(id, role);
    }

    //Borra
    async delete(id: number): Promise<void> {
        const roleExists = await this._roleRepository.findOne(id, {
            where: { status: 'ACTIVE'}
        });

        if (!roleExists) {
            throw new NotFoundException();
        }

        await this._roleRepository.update(id, { status: 'INACTIVE'});
    }
}
