import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "../auth/dto/create_user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    private readonly users = [
        {
            _id: '1',
            name: 'Ivan',
            email: 'ivan@gmail.com',
            password: '123'
        },
        {
            _id: 2,
            name: 'Cony',
            email: 'cony@gmail.com',
            password: '1234'
        }
    ];

    async findOne(email: string) {
        return this.users.find(user => user.email === email);
    }

    async findAll(){
        return await this.userModel.find();
    }

    async create(createUserDto: CreateUserDto) {
        return await this.userModel.create(createUserDto);
    }

    async update(id) {
        //return update
    }

    async delete(id) {
        //return delete
    }
}