import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from "@nestjs/common";

@Resolver()
export class AuthResolver{
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) {}

    @Mutation(()=>String)
    async login(
        @Args("email") user_email: string,
        @Args("password") user_password: string
    ){
        const user = await this.usersService.findOne({user_email})
        const isAuth = await bcrypt.compare(user_password, user.user_password)

        if(!isAuth) throw new UnauthorizedException();

        const acessToken = this.authService.getAccessToken({user})
        return acessToken;
    }

}