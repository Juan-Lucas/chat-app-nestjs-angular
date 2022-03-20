import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private readonly URL = environment.url;

  private readonly URL_MESSAGES = 'http://localhost:3000/messages';

  public userId: any;

  constructor(private socket: Socket, private http: HttpClient) {}

  sendMessage(message: string): void {
    this.socket.emit('sendMessage', message);
  }

  getNEwMessage(): Observable<string> {
    return this.socket.fromEvent<string>('newMessage');
  }

  getUsers() {
    return this.http.get(`${this.URL}` + `/all`);
  }

  getMessages() {
    return this.http.get(`${this.URL_MESSAGES}` + `/all`);
  }

  saveMessage(message: any) {
    const name = JSON.parse(this.getData())['name'];

    const user = this.getUser(name).subscribe((value: any) => {
      this.userId = value['data']['id'];
      console.log(value);
    });

    const messageNew = { message: message, sendId: this.userId };

    console.log(messageNew);

    return this.http.post(this.URL_MESSAGES + '/send', messageNew).pipe(
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return error;
      })
    );
  }

  private getUser(name: any) {
    return this.http.get(`${this.URL}/${name}`);
  }

  private getData(): any {
    return localStorage.getItem('user');
  }
}
