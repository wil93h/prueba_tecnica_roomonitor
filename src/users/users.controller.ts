import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService:  UsersService) {}

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }
  
  @Post('register')
  async register(
    @Body() createUserDto:CreateUserDto
  ) {
    return this.usersService.register(createUserDto);
  }
}
