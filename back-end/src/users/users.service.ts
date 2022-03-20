import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
      ) {}

      async getAll() {
        return await this.usersRepository.find({select: {
          id: true,
          name: true
        }});
      }

      async create(data: UsersDTO) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
      }

      async getByName(name: string): Promise<UsersDTO> {
        return await this.usersRepository
            .createQueryBuilder("user")
            .where("user.name = :name", {name: name})
            .getOne();
      }
}
