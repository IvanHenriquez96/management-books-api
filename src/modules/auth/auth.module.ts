import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        UserModule,
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            global: true,
            secret: process.env.APP_SECRET_KEY,
            signOptions: {expiresIn: '1h'}
        })
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [JwtModule, PassportModule]
})
export class AuthModule {}
