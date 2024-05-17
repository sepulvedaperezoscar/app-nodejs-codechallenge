export class Transaction {

    private readonly transactionExternalId: string;
    private readonly transactionStatus: number;
    private readonly createdAt: Date;

    constructor(
        private accountExternalIdCredit: string,
        private accountExternalIdDebit: string,
        private transferTypeId: number,
        private value: number,
    ) {
        this.transactionStatus = 1;
        this.createdAt = new Date();
    }

    async toJSON() {
        return {
            transactionExternalId: this.transactionExternalId,
            accountExternalIdCredit: this.accountExternalIdCredit,
            accountExternalIdDebit: this.accountExternalIdDebit,
            transactionStatus: this.transactionStatus,
            transferTypeId: this.transferTypeId,
            value: this.value,
            createdAt: this.createdAt
        };
    }
}