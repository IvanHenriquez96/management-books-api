import { Prop } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @Prop({ required: true })
  @IsNotEmpty()
  title: string;

  @Prop({ required: true })
  @IsNotEmpty()
  author: string;

  @Prop()
  @IsNotEmpty()
  genre: string;

  @Prop()
  @IsNotEmpty()
  coverImage: string;

  @Prop({ default: 'pending' })
  @IsNotEmpty()
  status: string;

  @Prop({ default: 0 })
  @IsNotEmpty()
  pagesRead: number;

  @Prop()
  @IsNotEmpty()
  totalPages: number;
}
