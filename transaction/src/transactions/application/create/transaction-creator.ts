import { Transaction } from "@src/transactions/domain/transaction";
import { TransactionRepository } from "@src/transactions/domain/transaction-repository";

import { Injectable } from "@src/shared/dependency-injection/domain/injectable";

import { CreateTransactionDto } from "./create-transaction-dto";
import { Logger } from "@src/shared/logger/domain";

@Injectable()
export class TransactionCreator {
  constructor(
    private readonly logger: Logger,
    private readonly transactionRepository: TransactionRepository,
  ) {}

  async run(createTransactionDto: CreateTransactionDto) {
    const transaction = new Transaction(
      createTransactionDto.accountExternalIdCredit,
      createTransactionDto.accountExternalIdDebit,
      createTransactionDto.tranferTypeId,
      createTransactionDto.value
    );
    const transactionCreated = await this.transactionRepository.create(transaction);
    return transactionCreated;
  }
}