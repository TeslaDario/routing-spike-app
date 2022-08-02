import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@rapp/core';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule } from '@rapp/shared';
import { ChatComponent } from './chat.component';
import { ChatRoutes } from './chat.routes';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateGroupChatComponent } from './components/create-group-chat/create-group-chat.component';

@NgModule({
    declarations: [
        ChatComponent,
        ChatListComponent,
        ChatOverviewComponent,
        CreateChatComponent,
        CreateGroupChatComponent,
    ],
    imports: [CommonModule, ChatRoutes, MaterialModule, LayoutModule, AvatarModule],
})
export class ChatModule {}
