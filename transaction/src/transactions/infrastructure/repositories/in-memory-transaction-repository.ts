import { Transaction } from "@src/transactions/domain/transaction";
import { TransactionRepository } from "@src/transactions/domain/transaction-repository";

import { Injectable } from "@shared/di/domain/injectable";

@Injectable()
export class InMemoryTransactionRepository implements TransactionRepository {
  private transactionIdToTransactionMap: Map<string, Transaction>;

  constructor() {
    this.transactionIdToTransactionMap = new Map();
    const transactions: Transaction[] = [
      new Transaction("1", "11", 2, 23),
      new Transaction("2", "22", 3, 34),
      new Transaction("3", "33", 4, 45),
    ];
    for (const transaction of transactions) {
      this.transactionIdToTransactionMap.set(transaction.accountExternalIdCredit, transaction);
    }
  }
  create(transaction: Transaction): Promise<Transaction> {
    this.transactionIdToTransactionMap.set(transaction.accountExternalIdCredit, transaction)
    return Promise.resolve(transaction);
  }

}