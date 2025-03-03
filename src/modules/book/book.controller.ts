import { Controller, Get } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller('/books')
export class BookController {

    constructor(private bookService: BookService){}

    @Get('/')
    findAll() {
        return this.bookService.findAll();
    }
}