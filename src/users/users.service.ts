import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.modul';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async CreateUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    console.log('user');
    return user;
  }
  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });

    return user;
  }
}
