import { Transaction } from "@src/transactions/domain/transaction";
import { TransactionRepository } from "@src/transactions/domain/transaction-repository";

import { Injectable } from "@src/shared/dependency-injection/domain/injectable";

import { CreateTransactionDto } from "./create-transaction-dto";
import { Logger } from "@src/shared/logger/domain";
import { TransactionResponseMapper } from "@src/transactions/application/create/transaction-response-mapper";

@Injectable()
export class TransactionCreator {
  constructor(
    private readonly logger: Logger,
    private readonly transactionRepository: TransactionRepository,
    private readonly transactionResponseMapper: TransactionResponseMapper
  ) {}

  async run(createTransactionDto: CreateTransactionDto) {
    const transaction = new Transaction(
      createTransactionDto.accountExternalIdCredit,
      createTransactionDto.accountExternalIdDebit,
      createTransactionDto.tranferTypeId,
      createTransactionDto.value
    );
    const transactionCreated = await this.transactionRepository.create(transaction);
    return this.transactionResponseMapper.map(transactionCreated);
  }
}