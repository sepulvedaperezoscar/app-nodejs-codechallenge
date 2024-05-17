import { Injectable } from "@src/shared/dependency-injection/domain/injectable";
import { TransactionRepository } from "@src/transactions/domain/transaction.repository";
import { UpdateStatusTransactionDto } from "../transaction.dto";
import { mapTransactionToResponse } from "@src/shared/util";


@Injectable()
export class TransactionUpdateStatusService {
  constructor(
    private readonly transactionRepository: TransactionRepository
  ) {}

  async run(updateStatusTransactionDto: UpdateStatusTransactionDto) {
    let transactionUpdated = await this.transactionRepository.updateStatus(
        updateStatusTransactionDto.transactionExternalId,
        updateStatusTransactionDto.status
    );

    let response;
    if (transactionUpdated) {
      response = mapTransactionToResponse(transactionUpdated); 
    }    

    return response;
  }
}