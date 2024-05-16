import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { LoggerModule } from '@src/shared/logger/infrastructure/logger.module';
import { TransactionModule } from '@src/transactions/infrastructure/transaction.module';
import { TransactionCreator } from '@src/transactions/application/create/transaction-creator.service';


describe('TransactionCreator', () => { 
  let service: TransactionCreator;
  let request = {
    "accountExternalIdCredit": "10274362536",
    "accountExternalIdDebit": "15245638263",
    "tranferTypeId": 2,
    "value": 245
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        LoggerModule,
        ConfigModule.forRoot({ isGlobal: true, cache: true }),
        TransactionModule
      ],
    }).compile();

    service = module.get<TransactionCreator>(TransactionCreator);
  });

  it('should be defined', () => { 
    expect(service).toBeDefined();
  });
  
  it('should return transaction with properties defined', async () => { 
    let result = await service.run(request);
    expect(result.transactionExternalId).toBeDefined();
    expect(result.transactionStatus.name).toBeDefined();
    expect(result.transactionType.name).toBeDefined();
    expect(result.value).toBeDefined();
    expect(result.createdAt).toBeDefined();
  });

  it('should return transaction with status pending', async () => { 
    let result = await service.run(request);
    expect(result.transactionStatus.name).toBe("PENDING");
  });

  it('should return transaction with transaction type 2 => PAYMENT', async () => { 
    let result = await service.run(request);
    expect(result.transactionType.name).toBe("PAYMENT");
  });
});