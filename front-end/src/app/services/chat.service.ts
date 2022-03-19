import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private readonly URL = environment.url;

  constructor(private socket: Socket, private http: HttpClient) { }

  sendMessage(message: string): void {
    this.socket.emit('sendMessage', message);
  }

  getNEwMessage(): Observable<string> {
    return this.socket.fromEvent<string>('newMessage');
  }

  getUsers(){
    return this.http.get(this.URL + '/all');
   }

}
