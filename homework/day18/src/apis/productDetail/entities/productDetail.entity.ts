import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class ProductDetail{
    @PrimaryGeneratedColumn("uuid")
    @Field(()=>String)
    product_detail_id: string
    
    @Column()
    @Field(()=>String)
    product_detail_name: string

    
}   