export interface UpdateStatusTransactionDto {    
  transactionExternalId: string;
  status: string;
}

export interface CreateTransactionDto {    
    accountExternalIdDebit: string;    
    accountExternalIdCredit: string;
    tranferTypeId: number;
    value: number;
}

export interface ResponseTransactionDto {
  transactionExternalId: string;
  transactionType: TransactionType;
  transactionStatus: TransactionStatus;
  value: number;
  createdAt: Date;      
}

interface TransactionType {
  name: string;
}

interface TransactionStatus {
  name: string;
}