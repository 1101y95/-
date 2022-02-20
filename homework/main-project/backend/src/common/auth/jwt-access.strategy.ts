import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, "access"){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt
        })
    }

    async validate(payload:any){
        return{
            id: payload.sub,
            email: payload.email
        }
    }
}