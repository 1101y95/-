import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductDetail{
    @PrimaryGeneratedColumn("uuid")
    product_detail_id: string
    
    @Column()
    product_detail_name: string

    
}   
