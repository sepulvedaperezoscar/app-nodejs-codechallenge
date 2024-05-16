import { TransactionStatus } from "@src/transactions/domain/transaction-status";

export class Transaction {

    status: TransactionStatus;

    constructor(
        readonly accountExternalIdDebit: string,    
        readonly accountExternalIdCredit: string,        
        readonly tranferTypeId: number,        
        readonly value: number
    ){
        this.status = TransactionStatus.PENDING;
    }

    

  }