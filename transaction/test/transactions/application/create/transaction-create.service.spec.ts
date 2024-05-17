import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { LoggerModule } from '@src/shared/logger/infrastructure/logger.module';
import { TransactionModule } from '@src/transactions/infrastructure/transaction.module';
import { TransactionCreateService } from '@src/transactions/application/create/transaction-create.service';
import { TransactionUpdateStatusService } from '@src/transactions/application/update/transaction-status-update.service';


describe('TransactionCreate', () => { 
  let serviceCreate: TransactionCreateService;
  let serviceUpdate: TransactionUpdateStatusService;
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

    serviceCreate = module.get<TransactionCreateService>(TransactionCreateService);
    serviceUpdate = module.get<TransactionUpdateStatusService>(TransactionUpdateStatusService);
  });

  it('should be defined', () => { 
    expect(serviceCreate).toBeDefined();
    expect(serviceUpdate).toBeDefined();
  });
  
  it('should return transaction with property status APROVED', async () => { 
    let result = await serviceCreate.run(request);
    let id = result.transactionExternalId;
    let updated = await serviceUpdate.run({
      transactionExternalId: id,
      status: "APPROVED"
    });
    expect(updated?.transactionStatus.name).toBe("APROVED");
  });

});