import { Body, Controller, Patch } from "@nestjs/common";

import { UpdateStatusTransactionRequestDto } from "./update-status-transaction-request.dto";
import { TransactionUpdateStatusService } from "@src/transactions/application/update/transaction-status-update.service";




@Controller("transactions")
export class UpdateStatusTransactionController {
  constructor(readonly transactionUpdateStatusService: TransactionUpdateStatusService) {}

  @Patch()
  async run(@Body() updateStatusTransactionRequestDto: UpdateStatusTransactionRequestDto) {
    return await this.transactionUpdateStatusService.run(updateStatusTransactionRequestDto);
  }
}