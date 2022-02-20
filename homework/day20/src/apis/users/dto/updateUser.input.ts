import { Field, InputType, Int } from "@nestjs/graphql";
import { Products } from "src/apis/products/entities/products.entity";

@InputType()
export class UpdateUserInput{
    @Field(()=>String)
    user_id: string

    
    @Field(()=>String,{nullable:true})
    user_email: string
    
    
    @Field(()=>String)
    user_name: string
    
    @Field(()=>String,{nullable:true})
    user_phone: string
    
    
    @Field(()=>Date,{nullable:true})
    user_birth: Date
    
    
    @Field(()=>String)
    user_password: string
    
    
    @Field(()=>Date,{nullable:true})
    user_signup_date: Date
    
    
    @Field(()=>Int,{nullable:true})
    user_type: number
    
    
    @Field(()=>String,{nullable:true})
    user_company_number: string
    
   
    @Field(()=>String,{nullable:true})
    user_company_name: string

    
    // @Field(()=>[Products],{nullable:true})
    // products: Products[]
}