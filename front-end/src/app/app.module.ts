import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
   NbListModule
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { ChatComponent } from './chat/chat.component';
import { NbChatModule} from '@nebular/theme';
import { SocketIoConfig, SocketIoModule} from 'ngx-socket-io';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};


@NgModule({
  declarations: [AppComponent, RegisterComponent, ChatComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbListModule,
    NbChatModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
