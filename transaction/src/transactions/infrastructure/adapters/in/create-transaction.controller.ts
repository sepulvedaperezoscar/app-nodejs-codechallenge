import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {ICreateTransactionController} from "@transactions/domain/ports/in/create-transaction.controller.interface";
import {CreateRequestDto} from "@transactions/infrastructure/adapters/dto/create-request.dto";
import {TransactionResponseDto} from "@transactions/infrastructure/adapters/dto/transaction-response.dto";
import {CreateTransactionService} from "@transactions/application/create-transaction/create-transaction.service";
import {SerializeResponseDto} from "@shared/infrastructure/decorators/serialize-response.decorator";
import {ConfigService} from "@nestjs/config";

@Controller('transactions')
export class CreateTransactionController implements ICreateTransactionController<CreateRequestDto, string> {
    constructor(private createTransactionService: CreateTransactionService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @SerializeResponseDto(TransactionResponseDto)
    async create(@Body() createRequestDto: CreateRequestDto): Promise<string> {
        return await this.createTransactionService.create(createRequestDto);
    }
}