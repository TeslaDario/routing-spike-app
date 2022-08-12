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
                path: 'create-chat',
                outlet: 'chatCreate',
                component: CreateChatComponent,
            },
            {
                path: 'create-group-chat',
                outlet: 'chatGroupCreate',
                component: CreateGroupChatComponent,
            },
            {
                path: ':chatId',
                component: ChatOverviewComponent,
                children: [
                    {
                        path: 'group-chat-info',
                        outlet: 'chatGroupInfo',
                        component: GroupChatInfoComponent,
                    },
                    {
                        path: 'group-chat-members',
                        outlet: 'chatGroupMembers',
                        component: GroupChatMembersComponent,
                    },
                ],
            },
        ],
    },
]);
