// Hay que tener el modulo configurado para tener la inyeccion de dependencias.
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { SharedModule } from './../../shared/shared.module';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RoleRepository])],
    providers: [RoleService],
    controllers: [RoleController]
})
export class RoleModule {}