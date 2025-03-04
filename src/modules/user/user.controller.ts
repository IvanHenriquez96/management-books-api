import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "../auth/dto/create_user.dto";

@Controller('/users')
export class UserController {

    constructor(private userService: UserService){}

    @Get('/')
    findAll(){
        return this.userService.findAll();
    }

    @Post('/')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Put(':id')
    update(@Param() id: string) {
        return this.userService.update(id);
    }

    @Delete(':id')
    delete(@Param() id: string){
        return this.userService.delete(id);
    }
}