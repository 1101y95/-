import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Users } from "./entities/users.entity";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver{
    constructor(
        private readonly usersService: UsersService
    ){}

    @Mutation(()=>Users)
    async createUsers(@Args("user_id")user_id:string){
        return await this.usersService.create({user_id})
    }
}