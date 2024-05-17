import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {AppController} from "@app/app.controller";
import {AppService} from "@app/app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TransactionsModule} from "@transactions/transactions.module";
import * as dbConfig from '@src/config/db/database.config';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./src/config/environments/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => dbConfig.default(configService),
      inject: [ConfigService],
    }),
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
