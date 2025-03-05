import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService{
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
    ){}

    async login(email: string, pass: string){

        //find user
        const user = await this.usersService.findOne(email);

        console.log('ENCONTRADO', user);

        // if (user?.password !== pass) {
        //     throw new UnauthorizedException;
        // }

        // const { password, ...result } = user;

        // // TODO: Generate a JWT and return it here
        // // instead of the user object
        // return result;
    }

    async signIn(email: string, pass: string){

   
    }
}