import { Users } from "src/apis/users/entities/users.entity";
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address{
    @PrimaryGeneratedColumn("uuid")
    address_id: string

    @Column()
    address_: string
    
    @Column()
    address_code: string

    @JoinTable()
    @ManyToOne(()=>Users)
    user: Users
}