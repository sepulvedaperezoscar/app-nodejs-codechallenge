import {ResponseBaseDto} from "@shared/infrastructure/response-base-dto.abstract";
import {Expose} from "class-transformer";
import {
    ResponseTransactionDto,
    TransactionStatus,
    TransactionType
} from "@transactions/domain/entity/dto/response-transaction.dto";

export class TransactionResponseDto implements ResponseTransactionDto {

    @Expose()
    transactionExternalId: string;

    @Expose()
    transactionStatus: TransactionStatus;

    @Expose()
    transactionType: TransactionType;

    @Expose()
    value: number;

    @Expose()
    createdAt: Date;

}