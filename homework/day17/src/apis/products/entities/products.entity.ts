import { ProductDetail } from "src/apis/productDetail/entities/productDetail.entity";
import { Users } from "src/apis/users/entities/users.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products{
    @PrimaryGeneratedColumn("uuid")
    product_id: string

    @Column()
    product_name: string

    @Column()
    product_price: number

    @Column()
    product_isSale: Boolean

    @Column()
    product_isSoldout: Boolean

    @JoinTable()
    @ManyToMany(()=>Users, (users)=>users.products)
    users: Users[]

    @JoinTable()
    @OneToOne(()=>ProductDetail)
    productDetailes: ProductDetail
}