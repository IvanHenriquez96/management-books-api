import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "../auth/dto/create_user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}


    async findOne(email: string) {
        return this.userModel.findOne({email});
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