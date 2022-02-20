import { Field, ObjectType } from "@nestjs/graphql";
import { Users } from "src/apis/users/entities/users.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Address{
    @PrimaryGeneratedColumn("uuid")
    @Field(()=>String)
    address_id: string

    @Column()
    @Field(()=>String)
    address_: string
    
    @Column()
    @Field(()=>String)
    address_code: string

    @JoinTable()
    @ManyToOne(()=>Users)
    @Field(()=>Users)
    user: Users
}