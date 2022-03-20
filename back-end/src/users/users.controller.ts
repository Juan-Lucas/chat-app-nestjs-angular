import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';

  import { UsersService } from './users.service';
  import { UsersDTO } from './users.dto';

  @Controller('users')
  export class UsersController {
    constructor(private usersService: UsersService) {}


    @Get('/all')
      async getAllUsers() {
        const users =  await this.usersService.getAll();
        return {
          statusCode: HttpStatus.OK,
          message: 'Users fetched successfully',
          users
        };
      }

    @Post('/create')
      async createUsers(@Body() data: UsersDTO) {
         const user = await this.usersService.create(data);
        return {
          statusCode: HttpStatus.OK,
          message: 'User created successfully',
          user
        };
      }

      @Get('/:name')
      async readUser(@Param('name') name: string) {
        const data =  await this.usersService.getByName(name);
        return {
          statusCode: HttpStatus.OK,
          message: 'User fetched successfully',
          data,
        };
      }
}