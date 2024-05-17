import { Body, Controller, Post } from "@nestjs/common";

import { TransactionCreateService } from "@src/transactions/application/create/transaction-create.service";
import { CreateTransactionRequestDto } from "./create-transaction-request.dto";



@Controller("transactions")
export class CreateTransactionController {
  constructor(readonly TransactionCreateService: TransactionCreateService) {}

  @Post()
  async run(@Body() createTransactionRequestDto: CreateTransactionRequestDto) {
    return await this.TransactionCreateService.run(createTransactionRequestDto);
  }
}