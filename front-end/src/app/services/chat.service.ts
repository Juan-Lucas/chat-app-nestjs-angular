import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly URL = environment.url;

  private readonly URL_MESSAGES = environment.urlMessages;

  public userId: any;

  constructor(private socket: Socket, private http: HttpClient) {}

  sendMessage(message: string): void {
    this.socket.emit('sendMessage', message);
  }

  getNEwMessage(): Observable<string> {
    return this.socket.fromEvent<string>('newMessage');
  }

  getUsers() {
    return this.http.get(`${this.URL}/all`);
  }

  getMessages() {
    return this.http.get(`${this.URL_MESSAGES}/all`);
  }

  saveMessage(message: any) {
    const name = JSON.parse(this.getData())['name'];

    // Get userId
    this.getUserId(name);

    return this.http.post(`${this.URL_MESSAGES}/send`, {
      message: message,
      userId: this.userId,
    });
  }

  private getUserId(name: string) {
    this.getUser(name).subscribe((value: any) => {
      this.userId = value['data']['id'];
      console.log(this.userId);
    });
  }

  private getUser(name: any) {
    return this.http.get(`${this.URL}/${name}`);
  }

  private getData(): any {
    return localStorage.getItem('user');
  }
}
