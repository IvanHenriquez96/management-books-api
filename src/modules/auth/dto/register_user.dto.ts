import { ApiProperty } from '@nestjs/swagger';
import {  IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
 @ApiProperty({ description: 'User email', example: 'ivan@gmail.com' })  
 @IsEmail()
 email: string;

 @ApiProperty({ description: 'User password', example: '123' }) 
 @IsNotEmpty()
 password: string;

 @ApiProperty({ description: 'User name', example: 'Ivan' })
 @IsNotEmpty()
 name: string;
}