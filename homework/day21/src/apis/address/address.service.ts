import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Address } from "./entities/address.entity";

@Injectable()
export class AddressService{
    constructor(
        @InjectRepository(Address)
        private readonly AddressRepository: Repository<Address>,
    ) {}

    async create({address_}){
        return await this.AddressRepository.save({address_})
    }
}