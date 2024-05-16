import { TransactionStatus } from "@src/transactions/domain/transaction-status";

export class Transaction {

    transactionExternalId: string;
    status: TransactionStatus;
    createdAt: Date;

    constructor(
        readonly accountExternalIdDebit: string,    
        readonly accountExternalIdCredit: string,        
        readonly tranferTypeId: number,        
        readonly value: number
    ){
        this.transactionExternalId = crypto.randomUUID();
        this.status = TransactionStatus.PENDING;
        this.createdAt = new Date();
    }

  }