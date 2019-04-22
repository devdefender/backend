import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserDto } from './models/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // Injects the userService into the constructor as us
  constructor(private us: UsersService) {}
  @Get()
  async findAll(): Promise<UserDto[]> {
    // calls the findAll() of userService
    return this.us.findAll();
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    // calls the create() of userService
    return this.us.create(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    // calls the findOne() of userService passing the parameter id
    return this.us.findOne(id);
  }
}
