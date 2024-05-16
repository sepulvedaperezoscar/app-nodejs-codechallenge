export interface CreateTransactionDto {    
    accountExternalIdDebit: string;    
    accountExternalIdCredit: string;
    tranferTypeId: number;
    value: number;
  }