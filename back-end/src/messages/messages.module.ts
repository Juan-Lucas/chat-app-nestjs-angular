import { MessagesEntity } from 'src/messages/messages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MessagesEntity])],
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}
