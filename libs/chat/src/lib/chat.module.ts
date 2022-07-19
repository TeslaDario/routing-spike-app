import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

@NgModule({
    declarations: [ChatComponent],
    imports: [CommonModule, ChatRoutingModule, LayoutModule],
})
export class ChatModule {}
