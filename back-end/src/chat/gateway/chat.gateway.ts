import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: ['http://localhost:4200'] } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection() {
    console.log('connection made');
  }
  handleDisconnect() {
    console.log('disconnected');
  }

  @SubscribeMessage('sendMessage')
  handleMessage(sockect: Socket, message: string) {
    this.server.emit('newMessage', message);
  }
}
