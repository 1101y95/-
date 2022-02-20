import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../users/entities/users.entity";
import { Payment, Pay_Status } from "./entities/payment.entity";

@Injectable()
export class PaymentService{
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository:Repository<Payment>,

        @InjectRepository(Users)
        private readonly usersRepository:Repository<Users>
    ){}

    async create({order_count,price,currentUser}){
        const payment = await this.paymentRepository.create({
            price,
            order_count,
            user_number: currentUser
        })
        await this.paymentRepository.save(payment)

        const theuser = await this.usersRepository.findOne({user_id:currentUser.user_id})

        await this.usersRepository.update({user_id: theuser.user_id},{price: theuser.price})

        return payment
    }

}