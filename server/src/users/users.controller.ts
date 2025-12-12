import { Controller } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Get, Post } from "@nestjs/common";
import { Body } from "@nestjs/common";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.getUsers();
  }

  @Post()
  create(@Body() body) {
    return this.usersService.createUser(body);
  }
}
