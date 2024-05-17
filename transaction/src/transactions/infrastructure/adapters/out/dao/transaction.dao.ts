import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

export type Status = "PENDING" | "APPROVED" | "REJECTED";
export type Type = "RECHARGE" | "PAYMENT" | "EXCHANGE";

@Entity('Transaction')
export class TransactionDao {

    @PrimaryGeneratedColumn("uuid")
    transactionExternalId: string;

    @Column()
    accountExternalIdCredit: string;

    @Column()
    accountExternalIdDebit: string;

    @Column({
        type: "enum",
        enum: ["PENDING", "APPROVED", "REJECTED"],
        default: "PENDING",
    })
    transactionStatus: Status;

    @Column({
        type: "enum",
        enum: ["RECHARGE", "PAYMENT", "EXCHANGE"],
        default: "RECHARGE"
    })
    transferType: Type;

    @Column()
    transferTypeId: number;

    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Date;

}