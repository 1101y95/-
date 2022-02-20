import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import * as bcrypt from "bcrypt"
import { UnauthorizedException, UseGuards } from "@nestjs/common";
import { IContext } from "src/common/types/context";
import { GqlAuthRefreshGuard } from "src/common/auth/gql-auth.guard";
import { CurrentUser, ICurrentUser } from "src/common/auth/gql-user.param";

@Resolver()
export class AuthResolver{
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService
    ) {}

    @Mutation(()=>String)
    async login(
        @Args("email") user_email: string,
        @Args("password") user_password: string,
        @Context() Context: IContext
    ){
        const user = await this.usersService.findOne({user_email})
        const isAuth = await bcrypt.compare(user_password, user.user_password)

        if(!isAuth) throw new UnauthorizedException();

        this.authService.setRefreshToken({user, res: Context.res})

        const acessToken = this.authService.getAccessToken({user})
        return acessToken;
    }

    @UseGuards(GqlAuthRefreshGuard)
    @Mutation(()=>String)
    async restoreAccessToken(
        @Context() context: IContext,
        @CurrentUser() currentUser : ICurrentUser
    ){
        const user = currentUser
        this.authService.setRefreshToken({ user, res: context.res })
        const accessToken = this.authService.getAccessToken({ user })
        return accessToken
    }

}