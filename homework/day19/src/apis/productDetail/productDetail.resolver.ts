import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ProductDetail } from "./entities/productDetail.entity";
import { ProductDetailService } from "./productDetail.service";

@Resolver()
export class ProductDetailResolver{
    constructor(
        private readonly productDetailService: ProductDetailService,
    ) {}

    @Mutation(()=> ProductDetail)
    async createProductDetail(@Args("product_detail_name") product_detail_name: string){
        return await this.productDetailService.create({product_detail_name})
    }

    @Mutation(()=>Boolean)
    deleteProductDetail(
        @Args("product_detail_id") product_detail_id: string
    ){
        return this.productDetailService.delete({product_detail_id})
    }
}