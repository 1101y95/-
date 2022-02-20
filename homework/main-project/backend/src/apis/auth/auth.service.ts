import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt"
import { Users } from "../users/entities/users.entity";

@Injectable()
export class AuthService{
    constructor(private readonly jwtService: JwtService){}

    getAccessToken({user}){
        const accessToken = this.jwtService.sign(
            {email: user.user_email, sub: user.user_id},
            {secret: "myAccessKey", expiresIn: "1h"}
        )
        return accessToken;
    }

    setRefreshToken({user,res}){
        const refreshToken = this.jwtService.sign(
            {email: user.user_email, sub: user.user_id},
            {secret: "myRefreshKey", expiresIn: "2w"}
        )

        res.setHeader("Set-Cookie", `refreshToken=${refreshToken}; path=/;`)
    }
}