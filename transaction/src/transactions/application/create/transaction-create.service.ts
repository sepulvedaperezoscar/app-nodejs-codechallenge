import { Transaction } from "@src/transactions/domain/transaction";
import { Injectable } from "@src/shared/dependency-injection/domain/injectable";
import { TransactionRepository } from "@src/transactions/domain/transaction.repository";
import { CreateTransactionDto } from "@src/transactions/application/transaction.dto";
import { mapTransactionToResponse } from "@shared/util";


@Injectable()
export class TransactionCreateService {
  constructor(
    private readonly transactionRepository: TransactionRepository
  ) {}

  async run(createTransactionDto: CreateTransactionDto) {
    const transaction = new Transaction(
      createTransactionDto.accountExternalIdCredit,
      createTransactionDto.accountExternalIdDebit,
      createTransactionDto.tranferTypeId,
      createTransactionDto.value
    );
    const transactionCreated = await this.transactionRepository.create(transaction);
    return mapTransactionToResponse(transactionCreated);
  }
}