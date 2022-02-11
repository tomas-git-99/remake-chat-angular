import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { VistaChatComponent } from './vista-chat/vista-chat.component';
import { InputChatComponent } from './input-chat/input-chat.component';



@NgModule({
  declarations: [
    ChatComponent,
    VistaChatComponent,
    InputChatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
