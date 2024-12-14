import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(data: any) {
    return await this.userModel.create(data);
  }

  findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOneById(id: string) {
    return this.userModel.findById(id);
  }

  updateById(id: string, data: any) {
    return this.userModel.findByIdAndUpdate(id, data);
  }

  deleteById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
