import { Body, Controller, Post } from "@nestjs/common";
import { TransactionCreator } from "@src/transactions/application/create/transaction-creator";
import { CreateTransactionRequestDto } from "@src/transactions/infrastructure/api/create/create-transaction-request-dto";


@Controller("transactions")
export class CreateTransactionController {
  constructor(readonly transactionCreator: TransactionCreator) {}

  @Post()
  async run(@Body() createTransactionRequestDto: CreateTransactionRequestDto) {
    return await this.transactionCreator.run(createTransactionRequestDto);
  }
}