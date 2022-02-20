import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { GqlAuthAccessGuard } from "src/common/auth/gql-auth.guard";
import { CurrentUser, ICurrentUser } from "src/common/auth/gql-user.param";
import { Payment } from "./entities/payment.entity";
import { PaymentService } from "./payment.service";

@Resolver()
export class PaymentResolver{
    constructor(private readonly paymentService: PaymentService){}

    // @UseGuards(GqlAuthAccessGuard)
    @Mutation(()=>Payment)
    createPayment(
        @Args("order_count") order_count: number,
        @Args("price") price: number,
        @CurrentUser() currentUser:ICurrentUser
    ){
        return this.paymentService.create({order_count,price,currentUser})
    }

}

