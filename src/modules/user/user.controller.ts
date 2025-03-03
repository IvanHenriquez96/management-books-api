import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/users')
export class UserController {

    constructor(private userService: UserService){}

    @Get('/')
    findAll(){
        return this.userService.findAll();
    }

    @Post('/')
    create() {
        return this.userService.create();
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