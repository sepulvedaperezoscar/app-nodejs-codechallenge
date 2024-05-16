import { Transaction } from "@src/transactions/domain/transaction";

export abstract class TransactionRepository {
  abstract create(transaction: Transaction): Promise<Transaction>;
}