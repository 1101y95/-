import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Address } from "src/apis/address/entities/address.entity";
import { Products } from "src/apis/products/entities/products.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    @Field(()=>String)
    user_number: string

    @Column()
    @Field(()=>String)
    user_id: string

    @Column()
    @Field(()=>String)
    user_email: string
    
    @Column()
    @Field(()=>String)
    user_name: string
    
    @Column()
    @Field(()=>String)
    user_phone: string
    
    @Column()
    @Field(()=>Date)
    user_birth: Date
    
    @Column()
    @Field(()=>String)
    user_password: string
    
    @Column()
    @Field(()=>Date)
    user_signup_date: Date
    
    @Column()
    @Field(()=>Int)
    user_type: number
    
    @Column()
    @Field(()=>String)
    user_company_number: string
    
    @Column()
    @Field(()=>String)
    user_company_name: string

    @JoinTable()
    @ManyToMany(()=>Products, (products)=>products.users)
    @Field(()=>[Products])
    products: Products[]
}