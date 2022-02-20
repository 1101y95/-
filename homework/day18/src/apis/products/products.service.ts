import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Products } from "./entities/products.entity";

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Products)
        private readonly productsRepository: Repository<Products>
    ){}

    async create({product_name}){
        return await this.productsRepository.save({product_name})
    }

    async findAll(){
        return await this.productsRepository.find()
        
    }

    async checkSoldout({product_id}){
        const product = await this.productsRepository.findOne({product_id})
        return product.product_isSoldout
    }

    async update({updateProductInput}){
        return await this.productsRepository.save(updateProductInput)
    }
}