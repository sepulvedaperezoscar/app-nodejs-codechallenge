import { Module } from "@nestjs/common";
import { CreateTransactionController } from "@src/transactions/infrastructure/api/create/create-transaction-controller";
import { TransactionCreator } from "@src/transactions/application/create/transaction-creator";
import { InMemoryTransactionRepository } from "@src/transactions/infrastructure/repositories/in-memory-transaction-repository";
import { TransactionRepository } from "@src/transactions/domain/transaction-repository";
import { TransactionResponseMapper } from "@src/transactions/application/create/transaction-response-mapper";


@Module({
  controllers: [CreateTransactionController],
  providers: [
    TransactionCreator,
    InMemoryTransactionRepository,
    TransactionResponseMapper,
    {
      provide: TransactionRepository,
      useExisting: InMemoryTransactionRepository,
    }
  ],
})
export class TransactionModule {}