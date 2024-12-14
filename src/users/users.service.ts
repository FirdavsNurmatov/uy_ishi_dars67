import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  @Inject('apiKey')
  apiKey: string;

  constructor(
    @Inject('userRepo') private readonly userRepository: UserRepository,
    // @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.createUser(createUserDto);
    return newUser;
  }

  async findAll() {
    const allUsers = await this.userRepository.findAllUsers();
    return allUsers;
  }

  async findOne(id: string) {
    const oneUserData = await this.userRepository.findOneById(id);
    return oneUserData;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.updateById(id, updateUserDto);
    const updatedUserData = this.userRepository.findOneById(id);
    return updatedUserData;
  }

  async remove(id: string) {
    const deletedUserData = await this.userRepository.deleteById(id);
    return { msg: 'Deleted', data: deletedUserData };
  }
}
