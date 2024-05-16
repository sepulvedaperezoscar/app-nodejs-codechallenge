import { ResponseTransactionDto } from "@src/transactions/application/create/transaction.dto";
import { Transaction } from "@src/transactions/domain/transaction";
import { TransactionType } from "@src/transactions/domain/transaction-type.enum";

export function getTransactionType(collection: any, item: number): string {
    return Object.keys(collection)[Object.values(collection).indexOf(item)]
}

export function mapTransactionToResponse(transaction: Transaction): ResponseTransactionDto {

    let response: ResponseTransactionDto = {
        transactionExternalId: transaction.transactionExternalId,
        transactionStatus: { 
            name: transaction.status 
        },
        transactionType: { 
            name: getTransactionType(TransactionType, transaction.tranferTypeId)
        },
        value: transaction.value,
        createdAt: transaction.createdAt,
    }

    return response;
}