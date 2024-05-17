import { join } from 'path';
import { isLocal, isTest } from '../constants';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

const typeOrmConfig = (configService: ConfigService) =>
    ({
        type: configService.getOrThrow<string>('DB_TYPE'),
        host: configService.getOrThrow<string>('DB_HOST'),
        port: configService.getOrThrow<string>('DB_PORT'),
        username: configService.getOrThrow<string>('DB_USERNAME'),
        password: configService.getOrThrow<string>('DB_PASSWORD'),
        database: configService.getOrThrow<string>('DB_NAME'),
        entities: [join(__dirname,'src/transactions/infrastructure/adapters/out/dao/*.dao.ts')],
        migrations: [join(__dirname, 'src/**/**.migration{.ts,.js}')],
        synchronize: isLocal || isTest,
        logging: false,
    } as TypeOrmModuleOptions);

export default typeOrmConfig;