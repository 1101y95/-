import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ProductDetail } from "src/apis/productDetail/entities/productDetail.entity";
import { Users } from "src/apis/users/entities/users.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Products{
    @PrimaryGeneratedColumn("uuid")
    @Field(()=>String)
    product_id: string

    @Column()
    @Field(()=>String)
    product_name: string

    @Column()
    @Field(()=>Int)
    product_price: number

    @Column()
    @Field(()=>Boolean)
    product_isSale: Boolean

    @Column()
    @Field(()=>Boolean)
    product_isSoldout: Boolean

    @JoinTable()
    @ManyToMany(()=>Users, (users)=>users.products)
    @Field(()=>[Users])
    users: Users[]

    @JoinTable()
    @OneToOne(()=>ProductDetail)
    @Field(()=>ProductDetail)
    productDetailes: ProductDetail
}