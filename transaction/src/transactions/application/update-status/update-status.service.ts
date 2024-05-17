import { Injectable } from '@nestjs/common';
import { TransactionRepositoryAbstract } from "@transactions/domain/ports/out/transaction.repository.abstract";
import {Transaction} from "@transactions/domain/entity/transaction";
import {UpdateStatusDto} from "@transactions/domain/entity/dto/update-status.dto";
import {ResponseTransactionDto} from "@transactions/domain/entity/dto/response-transaction.dto";
import {TransactionRepository} from "@transactions/infrastructure/adapters/out/transaction.repository";

@Injectable()
export class UpdateStatusService {
    constructor(private transactionRepository: TransactionRepositoryAbstract<string>) {}

    async update(updateStatusDto: UpdateStatusDto): Promise<string> {
        return this.transactionRepository.update(updateStatusDto);
    }
}