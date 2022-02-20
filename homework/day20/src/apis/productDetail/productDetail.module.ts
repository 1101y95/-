import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "../products/entities/products.entity";
import { ProductDetail } from "./entities/productDetail.entity";
import { ProductDetailResolver } from "./productDetail.resolver";
import { ProductDetailService } from "./productDetail.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductDetail, Products])],
    providers: [ProductDetailResolver, ProductDetailService]
})

export class ProductDetailModule{}