import { Module } from "@nestjs/common";

import { TransactionRepository } from "@src/transactions/domain/transaction.repository";
import { TransactionCreateService } from "@src/transactions/application/create/transaction-create.service";
import { TransactionUpdateStatusService } from "@src/transactions/application/update/transaction-status-update.service";
import { CreateTransactionController } from "@src/transactions/infrastructure/api/create/create-transaction.controller";
import { InMemoryTransactionRepository } from "@src/transactions/infrastructure/repositories/in-memory-transaction.repository";
import { UpdateStatusTransactionController } from "@src/transactions/infrastructure/api/update-status/update-status-transaction.controller";




@Module({
  controllers: [
    CreateTransactionController,
    UpdateStatusTransactionController
  ],
  providers: [
    TransactionCreateService,
    TransactionUpdateStatusService,
    InMemoryTransactionRepository,
    {
      provide: TransactionRepository,
      useExisting: InMemoryTransactionRepository,
    }
  ],
})
export class TransactionModule {}