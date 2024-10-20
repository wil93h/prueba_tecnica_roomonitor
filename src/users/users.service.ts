import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ){}

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
  async findOneByEmail(email: string): Promise<User | undefined>{
    return this.userModel.findOne({ email }).exec();
  }
  async register(user:CreateUserDto) {
    try{
      const userRegister = new this.userModel(user);
      return userRegister.save();
    } catch (error) {
      console.log("🚀 ~ UsersController ~ (error.code :", error.code )
      if (error.name === 'MongoServerError' && error.code === 11000) {
        throw new ConflictException('Email is already registered');
      }
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
