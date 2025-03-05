import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register_user.dto";

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() signInDto: RegisterUserDto){
        const { email, password } = signInDto;
        return this.authService.login(email, password);
    }

    @Post('/register')
    register(@Body() registerUserDto: RegisterUserDto){
        const { email, password, name } = registerUserDto;
        return this.authService.register(email, password, name);
    }
}