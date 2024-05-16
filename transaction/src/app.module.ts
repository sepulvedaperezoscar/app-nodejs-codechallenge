import { Module } from '@nestjs/common';
import { TransactionModule } from '@src/transactions/infrastructure/transaction-module';

@Module({
  imports: [TransactionModule]
})
export class AppModule {}
