import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtGoogleStrategy } from "src/common/auth/jwt-social-google.strategy";
import { JwtKakaoStrategy } from "src/common/auth/jwt-social-kakao.strategy";
import { JwtNaverStrategy } from "src/common/auth/jwt-social-naver.strategy";
import { Users } from "../users/entities/users.entity";
import { UsersService } from "../users/users.service";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";

@Module({
    imports:[
        JwtModule.register({}),
        TypeOrmModule.forFeature([Users])
    ],
    providers:[
        UsersService,
        AuthResolver,
        AuthService,
        JwtGoogleStrategy,
        JwtKakaoStrategy,
        JwtNaverStrategy
    ],
    controllers:[AuthController]
})

export class AuthModule{}