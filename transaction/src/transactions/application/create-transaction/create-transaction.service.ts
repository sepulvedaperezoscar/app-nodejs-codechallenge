import { Injectable } from '@nestjs/common';
import {CreateTransactionDto} from "@transactions/domain/entity/dto/create-transaction.dto";
import {TransactionRepository} from "@transactions/infrastructure/adapters/out/transaction.repository";
import {TransactionDao} from "@transactions/infrastructure/adapters/out/dao/transaction.dao";
import { TransactionRepositoryAbstract } from '@transactions/domain/ports/out/transaction.repository.abstract';

@Injectable()
export class CreateTransactionService {
    constructor(private transactionRepository: TransactionRepositoryAbstract<string>) {}

    async create(createTransactionDto: CreateTransactionDto): Promise<string>{
        return this.transactionRepository.save(createTransactionDto);
    }
}