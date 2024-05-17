import {CreateTransactionDto} from "@transactions/domain/entity/dto/create-transaction.dto";
import {UpdateStatusDto} from "@transactions/domain/entity/dto/update-status.dto";

export abstract class TransactionRepositoryAbstract<R> {
    abstract save(entity: CreateTransactionDto, options?: any): Promise<R>;
    abstract update(entity: UpdateStatusDto, options?: any): Promise<R>;
}