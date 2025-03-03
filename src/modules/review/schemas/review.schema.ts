import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Book } from "src/modules/book/schemas/book.schema";
import { User } from "src/modules/user/schemas/user.schema";


@Schema()
export class Review extends Document {

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Book'})
    book: Book;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;

    @Prop({required: true, min: 1,  max: 5})
    rating: number;

    @Prop()
    comment: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);