import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";

import {CreateTransactionService} from "@transactions/application/create-transaction/create-transaction.service";
import {UpdateStatusService} from "@transactions/application/update-status/update-status.service";
import {CreateTransactionController} from "@transactions/infrastructure/adapters/in/create-transaction.controller";
import { MemoryTransactionRepository } from '@transactions/infrastructure/adapters/out/memory-transaction.repository';
import { TransactionRepositoryAbstract } from '@transactions/domain/ports/out/transaction.repository.abstract';

@Module({
    imports: [
      //TypeOrmModule.forFeature([TransactionDao])
    ],
    exports: [],
    providers: [
        CreateTransactionService,
        UpdateStatusService,
        MemoryTransactionRepository,
        {
            provide: TransactionRepositoryAbstract,
            useExisting: MemoryTransactionRepository,
        }
    ],
    controllers: [CreateTransactionController],
})
export class TransactionsModule {}