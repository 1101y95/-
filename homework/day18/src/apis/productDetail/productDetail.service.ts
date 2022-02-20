import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductDetail } from "./entities/productDetail.entity";

@Injectable()
export class ProductDetailService{
    constructor(
        @InjectRepository(ProductDetail)
        private readonly productDetailRepository: Repository<ProductDetail>,
    ) {}

    async create({product_detail_name}){
        return await this.productDetailRepository.save({product_detail_name})
    }
}