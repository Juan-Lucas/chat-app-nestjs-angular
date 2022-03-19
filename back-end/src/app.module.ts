import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [TypeOrmModule.forRoot( {
    type: "mysql",
    host: "localhost",
    port: "3306",
    username: "root",
    password: "",
    database: "chat_db",
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }), ChatModule, UsersModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
