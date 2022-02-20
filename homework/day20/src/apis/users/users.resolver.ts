import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUsersInput } from "./dto/createUsers.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { Users } from "./entities/users.entity";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver{
    constructor(
        private readonly usersService: UsersService
    ){}

    @Mutation(()=>Users)
    async createUsers(@Args("createUsersInput") createUsersInput: CreateUsersInput ){
        return await this.usersService.create({createUsersInput})
    }

    @Mutation(()=>Users)
    async updateUser(
        @Args("updateUserInput") updateUserInput: UpdateUserInput
    ){
        return await this.usersService.update({updateUserInput})
    }

    @Query(()=>[Users])
    async fetchUsers(){
        return await this.usersService.findAll()
    }

    @Mutation(()=>Boolean)
    deleteUser(
        @Args("user_id") user_id: string
    ){
        return this.usersService.delete({user_id})
    }
}