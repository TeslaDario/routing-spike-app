import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateGroupChatComponent } from './components/create-group-chat/create-group-chat.component';
import { GroupChatInfoComponent } from './components/group-chat-info/group-chat-info.component';
import { GroupChatMembersComponent } from './components/group-chat-members/group-chat-members.component';

export const ChatRoutes = RouterModule.forChild([
    {
        path: '',
        component: ChatComponent,
        children: [
            {
                path: 'create',
                component: CreateChatComponent,
                children: [{ path: 'group-chat', component: CreateGroupChatComponent }],
            },
            { path: 'group-chat', component: CreateGroupChatComponent },

            {
                path: ':chatId',
                component: ChatOverviewComponent,
                children: [
                    {
                        path: 'info',
                        component: GroupChatInfoComponent,
                        children: [{ path: 'members', component: GroupChatMembersComponent }],
                    },
                    { path: 'members', component: GroupChatMembersComponent },
                ],
            },
        ],
    },
]);
