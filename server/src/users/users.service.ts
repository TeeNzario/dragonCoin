import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.users.findMany();
  }

  createUser(data) {
    return this.prisma.users.create({ data });
  }
}
