import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/modules/user/schemas/user.schema";


@Schema()
export class Book extends Document {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    author: string;

    @Prop()
    genre: string;

    @Prop()
    coverImage: string;

    @Prop({default:'pending'})
    status: IBookStatus;

    @Prop({default: 0})
    pagesRead: number;

    @Prop()
    totalPages: number;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
    

}

export const BookSchema = SchemaFactory.createForClass(Book)