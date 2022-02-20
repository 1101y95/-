import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Users } from "../users/entities/users.entity";
import { UsersService } from "../users/users.service";
import { AuthService } from "./auth.service";
import { Response, Request } from "express"

interface IOAuthUser{
    user: Pick<Users, "user_email"|"user_password"|"user_name"|"user_type">
}
@Controller("/")
export class AuthController{
    constructor(
        private readonly userService : UsersService,
        private readonly authService : AuthService
    ){}

    @Get("/login/google")
    @UseGuards(AuthGuard("google"))
    async loginGoogle(
        @Req() req: Request &IOAuthUser,
        @Res() res: Response
    ){
        let user = await this.userService.findOne({user_email:req.user.user_email})

        if(!user){
            const {user_password, ...rest} = req.user
            const createUser = {...rest, hashedPassword: user_password}

            user = await this.userService.create({...createUser})
        }

        this.authService.setRefreshToken({user,res})
        console.log(res)
        res.redirect("http://localhost:5500/frontend/social-login.html")
    }

    @Get("/login/naver")
    @UseGuards(AuthGuard("naver"))
    async loginNaver(
        @Req() req: Request &IOAuthUser,
        @Res() res: Response
    ){
        // let user = await this.userService.findOne({user_email:req.user.user_email})

        // if(!user){
        //     const {user_password, ...rest} = req.user
        //     const createUser = {...rest, hashedPassword: user_password}

        //     user = await this.userService.create({...createUser})
        // }

        // this.authService.setRefreshToken({user,res})
        console.log(res)
        res.redirect("http://localhost:5500/frontend/social-login.html")
    }

    @Get("/login/kakaotalk")
    @UseGuards(AuthGuard("kakao"))
    async loginKakao(
        @Req() req: Request &IOAuthUser,
        @Res() res: Response
    ){
        // let user = await this.userService.findOne({user_email:req.user.user_email})

        // if(!user){
        //     const {user_password, ...rest} = req.user
        //     const createUser = {...rest, hashedPassword: user_password}

        //     user = await this.userService.create({...createUser})
        // }

        // this.authService.setRefreshToken({user,res})
        console.log(res)
        res.redirect("http://localhost:5500/frontend/social-login.html")
    }
}
