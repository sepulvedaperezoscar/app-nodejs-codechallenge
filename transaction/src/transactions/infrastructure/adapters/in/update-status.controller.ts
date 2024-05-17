import {Body, Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {TransactionResponseDto} from "@transactions/infrastructure/adapters/dto/transaction-response.dto";
import {SerializeResponseDto} from "@shared/infrastructure/decorators/serialize-response.decorator";
import {IUpdateStatusController} from "@transactions/domain/ports/in/update-status.controller.interface";
import {UpdateStatusService} from "@transactions/application/update-status/update-status.service";
import {UpdateRequestDto} from "@transactions/infrastructure/adapters/dto/update-request.dto";

@Controller('users')
export class UpdateTransactionController implements IUpdateStatusController<UpdateRequestDto, string> {
    constructor(private updateStatusService: UpdateStatusService) {}

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    @SerializeResponseDto(TransactionResponseDto)
    async update(@Body() updateRequestDto: UpdateRequestDto): Promise<string> {
        return this.updateStatusService.update(updateRequestDto);
    }
}