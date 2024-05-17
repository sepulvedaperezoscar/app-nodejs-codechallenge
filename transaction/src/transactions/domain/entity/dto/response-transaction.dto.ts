export interface ResponseTransactionDto {
    transactionExternalId: string;
    transactionStatus: TransactionStatus;
    transactionType: TransactionType;
    value: number;
    createdAt: Date;
}

export interface TransactionStatus {
    name: string;
}

export interface TransactionType {
    name: string;
}