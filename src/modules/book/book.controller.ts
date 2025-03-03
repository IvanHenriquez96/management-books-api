import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller('/books')
export class BookController {

    constructor(private bookService: BookService){}

    @Get('/')
    findAll() {
        return this.bookService.findAll();
    }

    @Post('/')
    create() {
        return this.bookService.create();
    }

    @Put(':id')
    update(@Param() id: string) {
        return this.bookService.update(id);
    }

    @Delete(':id')
    delete(@Param() id: string){
        return this.bookService.delete(id);
    }

    
}