import { Module } from "@nestjs/common";

import { TransactionRepository } from "@src/transactions/domain/transaction.repository";
import { TransactionCreator } from "@src/transactions/application/create/transaction-creator.service";
import { CreateTransactionController } from "@src/transactions/infrastructure/api/create/create-transaction.controller";
import { InMemoryTransactionRepository } from "@src/transactions/infrastructure/repositories/in-memory-transaction.repository";




@Module({
  controllers: [CreateTransactionController],
  providers: [
    TransactionCreator,
    InMemoryTransactionRepository,
    {
      provide: TransactionRepository,
      useExisting: InMemoryTransactionRepository,
    }
  ],
})
export class TransactionModule {}