import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register_user.dto";
import { LoginDto } from "./dto/login.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/login')
    @ApiOperation({summary: 'Login', description: 'Login and generate a Bearer Token needed'})
    @ApiResponse({ status: 200, description: 'Login success' })
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    login(@Body() loginDto: LoginDto){
        const { email, password } = loginDto;
        return this.authService.login(email, password);
    }

    @Post('/register')
    @ApiOperation({summary: 'Register', description: 'Create a new user'})
    @ApiResponse({ status: 200, description: 'User created' })
    @ApiResponse({ status: 400, description: 'Invalid Data' })
    register(@Body() registerUserDto: RegisterUserDto){
        const { email, password, name } = registerUserDto;
        return this.authService.register(email, password, name);
    }
}