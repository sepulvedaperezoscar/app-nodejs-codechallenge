import { Transaction } from "@src/transactions/domain/transaction";
import { ResponseTransactionDto } from "./create-transaction-dto";
import { TransactionType } from "@src/transactions/domain/transaction-type";
import { Injectable } from "@src/shared/dependency-injection/domain/injectable";

@Injectable()
export class TransactionResponseMapper {

    map(transaction: Transaction): ResponseTransactionDto {

        let response: ResponseTransactionDto = {
            transactionExternalId: transaction.transactionExternalId,
            transactionStatus: { 
                name: transaction.status 
            },
            transactionType: { 
                name: TransactionType.EXCHANGE 
            },
            value: transaction.value,
            createdAt: transaction.createdAt,
        }

        return response;
    }
}