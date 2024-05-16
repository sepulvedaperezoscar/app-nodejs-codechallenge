import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { Logger } from '@shared/logger/domain';
import { LoggerInterceptor } from '@shared/logger/infrastructure/logger.interceptor';
import { NestLoggerService } from '@src/shared/logger/infrastructure/nestjs-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  app.useLogger(app.get(NestLoggerService));
  
  app.useGlobalInterceptors(
    app.get(LoggerInterceptor),
  );

  const configService = app.get(ConfigService);
  const port = configService.get<string>("PORT", "3000");
  const logger = app.get(Logger);

  await app.listen(port, "0.0.0.0");

  logger.info(`App is ready and listening on port ${port}`);
}
bootstrap();
