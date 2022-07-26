import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule } from '@rapp/shared';
import { ChatComponent } from './chat.component';
import { ChatRoutes } from './chat.routes';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';

@NgModule({
    declarations: [ChatComponent, ChatListComponent, ChatOverviewComponent],
    imports: [CommonModule, ChatRoutes, MaterialModule, LayoutModule, AvatarModule],
})
export class ChatModule {}
