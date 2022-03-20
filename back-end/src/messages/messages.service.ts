import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { MessagesEntity } from 'src/messages/messages.entity';
import { MessagesDTO } from './messages.dto';


@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessagesEntity)
    private messagesRepository: Repository<MessagesEntity>,
  ) {}

  async getAll() {
    return await this.messagesRepository.find();
  }

  async create(msgData: MessagesDTO) {
    const msg = this.messagesRepository.create(msgData);
    await this.messagesRepository.save(msgData);
    return msg;
  }
}
