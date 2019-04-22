import { Injectable } from '@nestjs/common';
import { USERS } from './Users';
import { UserDto } from './models/user.dto';

@Injectable()
export class UsersService {
  // Fetches all the user
  async findAll(): Promise<UserDto[]> {
    return USERS;
  }

  // Fetches one user that has an id matching the passing in id
  async findOne(id: string): Promise<UserDto> {
    return USERS.find(u => u.id === id);
  }

  // Creates a user
  async create(user: UserDto): Promise<UserDto> {
    return user;
  }
}
