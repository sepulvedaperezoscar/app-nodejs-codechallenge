export class TransactionStatus {

    private readonly id: number;

    constructor(private name: string) {}

    toJSON() {
        return {
            id: this.id,
            name: this.name
        }
    }
}