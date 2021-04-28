import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './../config/config.keys';
import { ConfigModule } from './../config/config.module';
import { ConfigService } from './../config/config.service';
import { ConnectionOptions } from 'typeorm';

// Confirmar esta linea
//import { ConnectionOptions } from 'node:tls';

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService){
            return {
                // Confirmar linea ssl
//                ssl: true,
                type: 'postgres' as 'postgres',
                host: config.get(Configuration.HOST),
                port: 5432,
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                database: config.get(Configuration.DATABASE),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + './migrations/*{.ts,.js}']
            } as ConnectionOptions;
        },
    }),
   ];