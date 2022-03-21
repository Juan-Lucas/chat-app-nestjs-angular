import { ChatService } from './../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  newMessage$: Observable<string> | undefined;

  messages: any[] = [];

  users: any[] = [];

  date = new Date();

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.getUsers();
    this.getMessages();
    return this.chatService.getNEwMessage().subscribe((message: string) => {
      this.messages.push({ message: message });
    });
  }

  onSubmit(form: NgForm) {
    const { message } = form.value;
    if (!message) return;
    this.chatService.saveMessage(message).subscribe((res) => {
      console.log(res);
    });
    this.chatService.sendMessage(message);

    form.reset();
  }

  getUsers() {
    this.chatService.getUsers().subscribe((response) => {
      this.users.push(...Object.entries(response)[2][1]);
      console.log(this.users);
    });
  }

  getMessages() {
    this.chatService.getMessages().subscribe((response) => {
      this.messages.push(...Object.entries(response)[2][1]);
      console.log(this.messages);
    });
  }
}
