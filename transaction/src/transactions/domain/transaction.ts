import { TransactionStatus } from "./transaction-status.enum";

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

    toString(): string {
        return JSON.stringify(
            `Transaction: [
                transactionExternalId: ${this.transactionExternalId},
                accountExternalIdDebit: ${this.accountExternalIdDebit},
                accountExternalIdCredit: ${this.accountExternalIdCredit},
                tranferTypeId: ${this.tranferTypeId},
                status: ${this.status},
                value: ${this.value},
                createdAt: ${this.createdAt}
            ]`
        );
    }

  }