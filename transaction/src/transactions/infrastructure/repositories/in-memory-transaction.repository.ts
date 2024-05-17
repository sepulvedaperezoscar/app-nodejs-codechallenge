import { Injectable } from "@nestjs/common";

import { Logger } from "@shared/logger/domain";
import { Transaction } from "@src/transactions/domain/transaction";
import { TransactionStatus } from "@src/transactions/domain/transaction-status.enum";
import { TransactionRepository } from "@src/transactions/domain/transaction.repository";



@Injectable()
export class InMemoryTransactionRepository implements TransactionRepository {
  private transactionIdToTransactionMap: Map<string, Transaction>;

  constructor(private readonly logger: Logger) {

    this.transactionIdToTransactionMap = new Map();
    const transactions: Transaction[] = [
      new Transaction("1", "11", 2, 23),
      new Transaction("2", "22", 3, 34),
      new Transaction("3", "33", 4, 45),
    ];
    for (const transaction of transactions) {
      this.transactionIdToTransactionMap.set(transaction.transactionExternalId, transaction);
    }
  }
  
  async create(transaction: Transaction): Promise<Transaction> {
    this.transactionIdToTransactionMap.set(transaction.transactionExternalId, transaction)
    return Promise.resolve(transaction);
  }

  updateStatus(id: string, status: string): Promise<Transaction | undefined> {
    let transaction = this.transactionIdToTransactionMap.get(id);
    
    if (transaction) {
      transaction.status = TransactionStatus.APPROVED;
    }

    return Promise.resolve(transaction);
  }

}