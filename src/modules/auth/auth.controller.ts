import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dto/sign_in.dto";

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() signInDto: SignInDto){
        const { email, password } = signInDto;
        return this.authService.login(email, password);
    }

    @Post('/sign_in')
    signIn(@Body() signInDto: SignInDto){
        const { email, password } = signInDto;
        return this.authService.signIn(email, password);
    }
}