import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoggerModule } from '@shared/logger/infrastructure/logger.module';
import { TransactionModule } from '@src/transactions/infrastructure/transaction.module';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    TransactionModule
  ]
})
export class AppModule {}
