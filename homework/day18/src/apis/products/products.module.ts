import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./entities/products.entity";
import { ProductResolver } from "./products.resolver";
import { ProductService } from "./products.service";

@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    providers: [ProductResolver, ProductService]
})

export class ProductModule{}