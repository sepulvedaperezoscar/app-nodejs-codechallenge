import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';

export const setupApp = (app: INestApplication) => {
    const packageJson = require(path.resolve('package.json'));
    process.env.API_VERSION = packageJson.version;

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true,
        }),
    );
    app.setGlobalPrefix('api/v1');

    const configService = app.get(ConfigService);
    app.enableCors({
        origin: configService.getOrThrow('CORS_ALLOWED_ORIGIN'),
        methods: 'PATCH,POST',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
};