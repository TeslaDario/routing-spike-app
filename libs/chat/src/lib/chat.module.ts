import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { ChatComponent } from './chat.component';
import { ChatRoutes } from './chat.routes';

@NgModule({
    declarations: [ChatComponent],
    imports: [CommonModule, ChatRoutes, LayoutModule],
})
export class ChatModule {}
