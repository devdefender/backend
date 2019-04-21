import { Injectable } from '@nestjs/common';
import { USERS } from './Users';
import { UserDto } from './models/user.dto';

@Injectable()
export class UsersService {
  async findAll(): Promise<UserDto[]> {
    return USERS;
  }

  async create(user: UserDto): Promise<UserDto> {
    return user;
  }
}
