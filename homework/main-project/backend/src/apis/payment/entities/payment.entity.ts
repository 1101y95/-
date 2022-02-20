import { Field, Int, registerEnumType } from "@nestjs/graphql";
import { Products } from "src/apis/products/entities/products.entity";
import { Users } from "src/apis/users/entities/users.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Pay_Status{
    PAYMENT = "PAYMENT",
    CANCEL = "CANCEL"
}

registerEnumType(Pay_Status,{
    name: "Pay_Status"
})

@Entity()
export class Payment{

    @PrimaryGeneratedColumn("uuid")
    @Field(()=>String)
    order_num: string

    @Column()
    @Field(()=>Date)
    order_date: Date

    @Column({type: "enum", enum: Pay_Status})
    @Field(()=>Pay_Status,{nullable:true})
    order_status: Pay_Status

    @Column()
    @Field(()=>Int,{nullable:true})
    order_count: number

    @Column()
    @Field(()=>Int,{nullable:true})
    price: number

    @ManyToOne(()=>Users,{nullable:true})
    @Field(()=>Users)
    user_number: Users

    @ManyToOne(()=>Products,{nullable:true})
    @Field(()=>Products)
    product_id: Products
}