import { Field, InputType, Int } from "@nestjs/graphql";
import { Users } from "src/apis/users/entities/users.entity";

@InputType()
export class CreateProductInput{
    @Field(()=>String)
    product_name: string

    @Field(()=>Int)
    product_price: number

    @Field(()=>Boolean)
    product_isSale: Boolean

    @Field(()=>Boolean)
    product_isSoldout: Boolean

    @Field(()=>[String])
    user: string[]
}