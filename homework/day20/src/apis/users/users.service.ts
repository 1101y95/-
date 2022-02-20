import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUsersInput } from "./dto/createUsers.input";
import { Users } from "./entities/users.entity";

interface ICreate{
    createUsersInput: CreateUsersInput
}

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>
    ){}

    async create({createUsersInput}:ICreate){
        return await this.usersRepository.save({...createUsersInput})
    }

    async update({updateUserInput}){
        return await this.usersRepository.save({...updateUserInput})
    }

    async findAll(){
        return await this.usersRepository.find();
    }

    async delete({user_id}){
        const result = await this.usersRepository.delete({user_id})
        return result.affected ? true : false
    }
}