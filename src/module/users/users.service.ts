import { UpdateDto } from './dto/user.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private usersList: any[];

  constructor() {
    this.usersList = [];
  }

  getUsers(): any {
    return this.usersList;
  }

  createUser(body: any) {
    if (!body) {
      throw new NotFoundException();
    }

    body.id = this.usersList.at(-1)?.id + 1 || 1;
    this.usersList.push(body);
  }

  updateUser(id: number, body: UpdateDto): void {
    const foundUser = this.usersList.find((e) => e.id == id);
    const findIndex = this.usersList.findIndex((e) => e.id == id);

    if (!foundUser) {
      throw new NotFoundException();
    }

    foundUser.name = body.name ? body.name : foundUser.name;
    foundUser.age = body.age ? body.age : foundUser.age;

    this.usersList.splice(findIndex, 1);
    this.usersList.push(foundUser);
  }

  deleteUser(id: number): void {
    const foundUser = this.usersList.find((e) => e.id == id);
    const findIndex = this.usersList.findIndex((e) => e.id == id);

    if (!foundUser) {
      throw new NotFoundException();
    }

    this.usersList.splice(findIndex, 1);
  }
}
