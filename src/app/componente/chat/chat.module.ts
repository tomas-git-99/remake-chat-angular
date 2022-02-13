import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { VistaChatComponent } from './vista-chat/vista-chat.component';
import { InputChatComponent } from './input-chat/input-chat.component';
import { VisualContactoComponent } from './visual-contacto/visual-contacto.component';



@NgModule({
  declarations: [
    ChatComponent,
    VistaChatComponent,
    InputChatComponent,
    VisualContactoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputChatComponent,
    VistaChatComponent,
    VisualContactoComponent
  ]
})
export class ChatModule { }
