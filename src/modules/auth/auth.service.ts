import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService{
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
        private configService: ConfigService
    ){}

    getSecretKey(): string{
        //Get Secret Key
        const secretKey = this.configService.get<string>('APP_SECRET_KEY');
        if (!secretKey) throw new Error('APP_SECRET_KEY undefined');
        return secretKey;
    }

    async validateUser(email: string, pass: string){
        //Find user
        const user = await this.usersService.findOne(email);
        if (!user) throw new UnauthorizedException('User not found :C');
        //Valdiate Password
        const isPasswordValid = await bcrypt.compare(pass, user.password);
        if(!isPasswordValid) throw new UnauthorizedException('Credenciales Incorrectas');

        const { password, ...result } = user;
 
        return result;
    }

    async login(email: string, pass: string){
        const user = await this.validateUser(email, pass);
        const payload = {sub: user._id, email: user.email}

        const secretKey = this.getSecretKey();

        return {
            access_token: this.jwtService.sign(payload, {secret: secretKey})
        }
    }

    async register(email: string, pass: string, name: string){
        //verify if already exist
        const existingUser = await this.usersService.findOne(email);
        if (existingUser) throw new ConflictException('User already exists');

        //create user in DB
        const hashedPassword = await bcrypt.hash(pass, 10);
        const newUser = await this.usersService.create({email, password: hashedPassword, name})
        
        const secretKey = this.getSecretKey();
        //Generate Payload
        const payload = { sub: newUser._id, email: newUser.email, name: newUser.email}

        return {
            access_token: this.jwtService.sign(payload, {secret: secretKey})
        }
    }
}