import { UserDto, UpdateDto } from './dto/user.dto';
import { UserService } from './users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get')
  getUsers(): any {
    return this.userService.getUsers();
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/create')
  createUsers(@Body() body: UserDto): void {
    this.userService.createUser(body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('/update/:id')
  updateUser(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() body: UpdateDto,
  ): void {
    this.userService.updateUser(id, body);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/delete/:id')
  deleteUsers(@Param('id', new ParseIntPipe()) id: number): void {
    this.userService.deleteUser(id);
  }
}
