import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
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
    update() {
        //find and update
    }

    @Delete()
    delete(){
        //delete book
    }

    
}