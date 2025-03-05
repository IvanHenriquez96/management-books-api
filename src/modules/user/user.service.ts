import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { RegisterUserDto } from "../auth/dto/register_user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}


    async findOne(email: string) {
        return this.userModel.findOne({email});
    }

    async findAll(){
        return await this.userModel.find();
    }

    async create(registerUserDto: RegisterUserDto) {
        return await this.userModel.create(registerUserDto);
    }

    async update(id) {
        //return update
    }

    async delete(id) {
        //return delete
    }
}