import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "../auth/auth.guard";
import { RegisterUserDto } from "../auth/dto/register_user.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller('/users')
export class UserController {

    constructor(private userService: UserService){}
    @UseGuards(AuthGuard)
    @Get('/')
    @ApiOperation({summary: 'Find all users', description: 'Find all users'})
    @ApiResponse({ status: 200, description: 'All users' })
    findAll(){
        return this.userService.findAll();
    }

    @Post('/')
    @ApiOperation({summary: 'Create User', description: 'Create User'})
    @ApiResponse({ status: 200, description: 'User created' })
    create(@Body() registerUserDto: RegisterUserDto) {
        return this.userService.create(registerUserDto);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update User', description: 'Update User'})
    @ApiResponse({ status: 200, description: 'User updated' })
    update(@Param() id: string) {
        return this.userService.update(id);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete User', description: 'Delete User'})
    @ApiResponse({ status: 200, description: 'User deleted' })
    delete(@Param() id: string){
        return this.userService.delete(id);
    }
}