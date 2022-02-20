import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDetail } from "../productDetail/entities/productDetail.entity";
import { CreateProductInput } from "./dto/createProduct.input";
import { Products } from "./entities/products.entity";

interface IDelete{
    product_id: string
}
interface ICreate{
    createProductInput: CreateProductInput
}

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Products)
        private readonly productsRepository: Repository<Products>,

        @InjectRepository(ProductDetail)
        private readonly productDetailRepository: Repository<ProductDetail>
    ){}

    async create({createProductInput}: ICreate){
        return await this.productsRepository.save({...createProductInput})
    }

    async findAll(){
        return await this.productsRepository.find({
            relations: ["productDetail"]
        })
    }

    async checkSoldout({product_id}){
        const product = await this.productsRepository.findOne({product_id})
        return product.product_isSoldout
    }

    async update({updateProductInput}){
        return await this.productsRepository.save(updateProductInput)
    }

    async delete({product_id}: IDelete){
        const result = await this.productsRepository.delete({product_id})
        return result.affected ? true : false;
    }
}