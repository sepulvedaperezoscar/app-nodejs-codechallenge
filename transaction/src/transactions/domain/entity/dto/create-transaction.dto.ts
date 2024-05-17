export interface CreateTransactionDto {
    accountExternalIdCredit: string;
    accountExternalIdDebit: string;
    transferTypeId: number;
    value: number;
}