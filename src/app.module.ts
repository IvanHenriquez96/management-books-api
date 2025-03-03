import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { ReviewModule } from './review/review.module';


@Module({
  imports: [AuthModule, UserModule, BookModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
