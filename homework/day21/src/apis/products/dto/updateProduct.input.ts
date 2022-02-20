import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateProductInput{
    @Field(()=>String)
    product_name: string

    @Field(()=>Int)
    product_price: number

    @Field(()=>Boolean)
    product_isSoldout: Boolean

}