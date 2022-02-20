import { InputType, OmitType,Field } from "@nestjs/graphql";
import { ProductDetail } from "../entities/productDetail.entity";

@InputType()
export class ProductDetailInput {
    @Field(()=>String)
    product_detail_id: string

    @Field(()=>String)
    product_detail_name: string
}