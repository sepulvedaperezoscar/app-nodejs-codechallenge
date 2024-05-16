import { Transaction } from "./transaction";

export abstract class TransactionRepository {
  abstract create(transaction: Transaction): Promise<Transaction>;
}