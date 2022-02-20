import { Address } from "src/apis/address/entities/address.entity";
import { Products } from "src/apis/products/entities/products.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    user_number: string

    @Column()
    user_id: string

    @Column()
    user_email: string
    
    @Column()
    user_name: string
    
    @Column()
    user_phone: string
    
    @Column()
    user_birth: Date
    
    @Column()
    user_password: string
    
    @Column()
    user_signup_date: Date
    
    @Column()
    user_type: number
    
    @Column()
    user_company_number: string
    
    @Column()
    user_company_name: string

    @JoinTable()
    @ManyToMany(()=>Products, (products)=>products.users)
    products: Products[]
}