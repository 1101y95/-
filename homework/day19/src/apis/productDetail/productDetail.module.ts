import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductDetail } from "./entities/productDetail.entity";
import { ProductDetailResolver } from "./productDetail.resolver";
import { ProductDetailService } from "./productDetail.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProductDetail])],
    providers: [ProductDetailResolver, ProductDetailService]
})

export class ProductDetailModule{}