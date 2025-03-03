import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { ReviewModule } from './modules/review/review.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule, 
    UserModule, 
    BookModule, 
    ReviewModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.${process.env.DB_HOST}`)
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
