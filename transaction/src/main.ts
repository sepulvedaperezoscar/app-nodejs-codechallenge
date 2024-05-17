import {NestFactory} from '@nestjs/core';
import {AppModule} from '@app/app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {ConfigService} from "@nestjs/config";
import {setupApp} from "@src/setup-app";

async function bootstrap() {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);
    const configService = app.get(ConfigService);
    setupApp(app);
    await app.listen(configService.getOrThrow<number>('PORT'));
}

bootstrap();
