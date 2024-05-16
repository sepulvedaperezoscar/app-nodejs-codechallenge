import { Body, Controller, Post } from "@nestjs/common";
import { TransactionCreator } from "@src/transactions/application/create/transaction-creator";
import { CreateTransactionHttpDto } from "@src/transactions/infrastructure/api/create/create-transaction-http-dto";
import { Validate } from "class-validator";


@Controller("transactions")
export class CreateTransactionController {
  constructor(readonly transactionCreator: TransactionCreator) {}

  @Post()
  async run(@Body() body: CreateTransactionHttpDto) {
    return await this.transactionCreator.run(body);
  }
}