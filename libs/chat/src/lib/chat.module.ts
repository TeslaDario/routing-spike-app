import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@rapp/layout';
import { AvatarModule, MaterialModule, SearchInputModule } from '@rapp/ui';
import { ChatComponent } from './chat.component';
import { ChatRoutes } from './chat.routes';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateGroupChatComponent } from './components/create-group-chat/create-group-chat.component';
import { GroupChatInfoModalComponent } from './components/group-chat-info/group-chat-info-modal.component';
import { GroupChatInfoComponent } from './components/group-chat-info/group-chat-info.component';
import { GroupChatMembersComponent } from './components/group-chat-members/group-chat-members.component';

@NgModule({
    declarations: [
        ChatComponent,
        ChatListComponent,
        ChatOverviewComponent,
        CreateChatComponent,
        CreateGroupChatComponent,
        GroupChatInfoComponent,
        GroupChatInfoModalComponent,
        GroupChatMembersComponent,
    ],
    imports: [CommonModule, ChatRoutes, FormsModule, MaterialModule, LayoutModule, AvatarModule, SearchInputModule],
    exports: [GroupChatInfoComponent],
})
export class ChatModule {}
