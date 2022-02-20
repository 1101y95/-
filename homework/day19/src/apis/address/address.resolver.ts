import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AddressService } from "./address.service";
import { Address } from "./entities/address.entity";

@Resolver()
export class AddressResolver{
    constructor(
        private readonly addressService: AddressService,
    ){}

    @Mutation(()=> Address)
    async createAddress(@Args("address_") address_: string){
        return await this.addressService.create({address_})
    }
}