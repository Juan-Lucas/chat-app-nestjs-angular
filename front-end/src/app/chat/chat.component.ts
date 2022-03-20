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

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    return this.chatService.getNEwMessage().subscribe((message: string) => {
      this.messages.push(message);
    });

  }

  onSubmit(form: NgForm) {
    const { message } = form.value;
    if(!message) return;
    this.chatService.saveMessage(message);
    this.chatService.sendMessage(message);
  
    form.reset();
  }

  getUsers() {
    this.chatService.getUsers().subscribe( response => {
      this.users = response as any[];
      console.log(response);
    })
  }

  geMessages() {
    this.chatService.getMessages().subscribe( response => {
      this.messages = response as any[];
      console.log(response);
    })
  }

  
}
