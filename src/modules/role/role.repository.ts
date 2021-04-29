// Este nombre puede ser  cualquier nombre
import { EntityRepository, Repository } from "typeorm";
import { Role } from "./role.entity";

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}