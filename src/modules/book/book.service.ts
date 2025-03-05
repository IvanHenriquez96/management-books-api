import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/create_book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async findAll() {
    return await this.bookModel.find();
  }

  async create(createBookDto: CreateBookDto, id: string) {
    const newBook = {
      ...createBookDto,
      user: id,
    };
    return await this.bookModel.create(newBook);
  }

  async update(createBookDto: CreateBookDto, id: string) {
    try {
      return await this.bookModel.findByIdAndUpdate(id, createBookDto, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.bookModel.findByIdAndDelete(id);
    } catch (error) {
      throw new ConflictException(error);
    }
  }
}
