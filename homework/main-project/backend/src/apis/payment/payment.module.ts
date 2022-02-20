import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../users/entities/users.entity";
import { Payment } from "./entities/payment.entity";
import { PaymentResolver } from "./payment.resolver";
import { PaymentService } from "./payment.service";

@Module({
    imports:[TypeOrmModule.forFeature([Payment,Users])],
    providers: [PaymentService, PaymentResolver]
})


export class PaymentModule{

}