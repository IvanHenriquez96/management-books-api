import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Book, BookSchema } from "./schemas/book.schema";
import { Model } from "mongoose";

@Injectable()
export class BookService {

    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>){}

    async findAll(){
        return await this.bookModel.find();
    }

    async create() {
        // return await this.bookModel.create();
    }
}