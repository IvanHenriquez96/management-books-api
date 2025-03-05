import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create_book.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/')
  findAll() {
    return this.bookService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('/')
  create(@Body() createBookDto: CreateBookDto, @Request() req) {
    const { id } = req.user;
    return this.bookService.create(createBookDto, id);
  }

  @Put(':id')
  update(@Body() createBookDto: CreateBookDto, @Param('id') id: string) {
    return this.bookService.update(createBookDto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
