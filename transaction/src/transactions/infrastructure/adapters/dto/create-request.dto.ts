import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';

export class CreateRequestDto {
    @IsNotEmpty()
    @IsNumberString()
    accountExternalIdCredit: string;

    @IsNotEmpty()
    @IsNumberString()
    accountExternalIdDebit: string;

    @IsNotEmpty()
    @IsNumber()
    transferTypeId: number;

    @IsNotEmpty()
    @IsNumber()
    value: number;
}