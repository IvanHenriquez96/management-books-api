import { ApiProperty } from '@nestjs/swagger';
import {  IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
 @ApiProperty({ description: 'User email', example: 'ivan@gmail.com' })
 @IsEmail()
 email: string;
 
 @ApiProperty({ description: 'User password', example: '123' })
 @IsNotEmpty()
 password: string;

}