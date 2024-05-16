import { IsEmail, IsNotEmpty, IsNumberString, IsString, isNumber } from "class-validator";

export class CreateTransactionRequestDto {

  @IsNotEmpty()
  @IsNumberString()
  accountExternalIdCredit!: string;

  @IsNotEmpty()
  @IsNumberString()
  accountExternalIdDebit!: string;
  
  @IsNotEmpty()
  tranferTypeId!: number;
  
  @IsNotEmpty()
  value!: number;
      
}