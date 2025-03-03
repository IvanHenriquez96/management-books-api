import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async findAll(){
        return await this.userModel.find();
    }

    async create() {
        // return await this.userModel.create();
    }

    async update(id) {
        //return update
    }

    async delete(id) {
        //return delete
    }
}