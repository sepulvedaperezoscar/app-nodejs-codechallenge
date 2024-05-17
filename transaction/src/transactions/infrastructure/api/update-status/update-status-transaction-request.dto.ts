import { IsEmail, IsNotEmpty, IsNumberString, IsString, isNumber } from "class-validator";

export class UpdateStatusTransactionRequestDto {

  @IsNotEmpty()
  @IsString()
  transactionExternalId!: string;

  @IsNotEmpty()
  @IsString()
  status!: string;
      
}