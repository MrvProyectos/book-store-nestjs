import { Injectable } from "@nestjs/common";
import { UserDto } from "src/modules/user/dto/user.dto";
import { User } from "src/modules/user/user.entity";
import { TypeMapper } from "ts-mapper";


@Injectable() // Nuestra clase servicio MapperService extiende de TypeMapper
export class MapperService extends TypeMapper {

    constructor() {
        super();
        this.config();
    }

    // este metodo es private ya que no es necesario que sea accedido desde otra clase
    // este metodo no retorna nada, solo configurara nuestros mapper.
    // para mapear nuestras librerias con otro objeto debemos crear un DTO (Data Transfer Objects).
    //
    private config(): void { // el primer parametro es el tipo de entidad y el segundo es a quien se va a convertir
        this.createMap<User, UserDto>()
        .map(UserEntity => UserEntity.id, UserDtodto => UserDtodto.id)
        .map(UserEntity => UserEntity.username, UserDtodto => UserDtodto.username)
        .map(UserEntity => UserEntity.email, UserDtodto => UserDtodto.email)
        .map(UserEntity => UserEntity.details, UserDtodto => UserDtodto.details)
        .map(UserEntity => UserEntity.roles, UserDtodto => UserDtodto.roles)
    }
}