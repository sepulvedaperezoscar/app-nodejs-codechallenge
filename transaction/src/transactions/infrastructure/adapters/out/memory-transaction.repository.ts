import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import {TransactionRepositoryAbstract} from "@transactions/domain/ports/out/transaction.repository.abstract";
import { UpdateStatusDto } from '@src/transactions/domain/entity/dto/update-status.dto';
import { CreateTransactionDto } from '@src/transactions/domain/entity/dto/create-transaction.dto';
import {TransactionDao} from "@transactions/infrastructure/adapters/out/dao/transaction.dao";

@Injectable()
export class MemoryTransactionRepository extends TransactionRepositoryAbstract<string> {
    constructor() {
        super();
    }

    async save(entity: CreateTransactionDto, options?: any): Promise<string> {

        return "Create"
    }
    async update(entity: UpdateStatusDto, options?: any): Promise<string> {

        return "Update"
    }

}