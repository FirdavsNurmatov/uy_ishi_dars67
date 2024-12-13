import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    await newUser.save();
    return 'Created.';
  }

  async findAll() {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findOne(id: string) {
    const oneUserData = await this.userModel.findById(id);
    return oneUserData;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, updateUserDto);
    const updatedUserData = this.userModel.findById(id);
    return updatedUserData;
  }

  async remove(id: string) {
    const deletedUserData = await this.userModel.findByIdAndDelete(id);
    return { msg: 'Deleted', data: deletedUserData };
  }
}
