import { MessagesDTO } from './messages.dto';
import { MessagesService } from './messages.service';
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

@Controller('messages')
export class MessagesController {
  constructor(private messageSercie: MessagesService) {}
  
  
  @Get('/all')
  async getAllUsers() {
    const messages =  await this.messageSercie.getAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      messages
    };
  }

@Post('/send')
  async createMessages(@Body() data: MessagesDTO) {
     const messageNew = await this.messageSercie.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'Message sended successfully',
      messageNew
    };
  }
}
