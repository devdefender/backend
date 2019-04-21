import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDto } from './models/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private us: UsersService) {}
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.us.findAll();
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return this.us.create(user);
  }
}
