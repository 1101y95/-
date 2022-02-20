import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUsersInput } from "./dto/createUsers.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { Users } from "./entities/users.entity";
import { UsersService } from "./users.service";
import * as bcrypt from "bcrypt"
import { UseGuards } from "@nestjs/common";
import { GqlAuthAccessGuard } from "src/common/auth/gql-auth.guard";
import { CurrentUser, ICurrentUser } from "src/common/auth/gql-user.param";

@Resolver()
export class UsersResolver{
    constructor(
        private readonly usersService: UsersService
    ){}

    @Mutation(()=>Users)
    async createUsers(
        @Args("email") user_email: string,
        @Args("password") user_password: string,
        @Args("name") user_name: string
    ){
        const hashedPassword = await bcrypt.hash(user_password,10)
        return await this.usersService.create({user_email,hashedPassword,user_name})
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


    @UseGuards(GqlAuthAccessGuard)
    @Query(()=>String)
    async fetchUser(
        @CurrentUser() currentUser: ICurrentUser
    ){
        console.log("currentUser: ",currentUser )
        return await this.usersService.findOne({user_email: currentUser.email})
    }
}