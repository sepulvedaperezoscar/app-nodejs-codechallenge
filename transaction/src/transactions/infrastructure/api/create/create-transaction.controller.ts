import { Body, Controller, Post } from "@nestjs/common";

import { TransactionCreator } from "@src/transactions/application/create/transaction-creator.service";
import { CreateTransactionRequestDto } from "./create-transaction-request.dto";



@Controller("transactions")
export class CreateTransactionController {
  constructor(readonly transactionCreator: TransactionCreator) {}

  @Post()
  async run(@Body() createTransactionRequestDto: CreateTransactionRequestDto) {
    return await this.transactionCreator.run(createTransactionRequestDto);
  }
}