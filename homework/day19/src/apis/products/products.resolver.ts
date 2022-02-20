
import { UnprocessableEntityException } from "@nestjs/common";
import { Args, Mutation, Resolver,Query } from "@nestjs/graphql";
import { UpdateProductInput } from "./dto/updateProduct.input";
import { Products } from "./entities/products.entity";
import { ProductService } from "./products.service";

@Resolver()
export class ProductResolver{
    constructor(
        private readonly productService: ProductService
    ){}

    @Mutation(()=> Products)
    async createProducts(
        @Args("product_name") product_name: string
        ){
        return await this.productService.create({product_name})
    }

    @Query(()=>[Products])
    fetchProducts(){
        return this.productService.findAll();
    }

    @Mutation(()=>Products)
    async updateProduct(
        @Args("updateProductInput") updateProductInput: UpdateProductInput,
        @Args("product_id") product_id: string
    ){
        const isSoldout = await this.productService.checkSoldout({product_id})
        if(isSoldout){throw new UnprocessableEntityException("판매완료된 상품입니다.")}
        return this.productService.update({updateProductInput});
    }

    @Mutation(()=> Boolean)
    deleteProduct(
        @Args("product_id") product_id: string
    ){
        return this.productService.delete({product_id});
    }
}