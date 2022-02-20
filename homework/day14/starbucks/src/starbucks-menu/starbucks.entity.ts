import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";

@Entity()
@ObjectType()
export class CoffeeDetail{
    @Column()
    @Field(()=>String)
    menu: string;
    
    @Column()
    @Field(()=>String)
    price: string

    @Column()
    @Field(()=>String)
    kcal: string

    @Column()
    @Field(()=>String)
    fat: string

    @Column()
    @Field(()=>String)
    protein: string

    @Column()
    @Field(()=>String)
    salt: string

    @Column()
    @Field(()=>String)
    sugar: string

    @Column()
    @Field(()=>String)
    caffeine: string
}