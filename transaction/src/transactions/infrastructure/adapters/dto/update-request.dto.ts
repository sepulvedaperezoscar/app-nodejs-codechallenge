import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class UpdateRequestDto {
    @IsNotEmpty()
    @IsNumberString()
    transactionExternalId: string;

    @IsNotEmpty()
    @IsNumber()
    status: number;
}