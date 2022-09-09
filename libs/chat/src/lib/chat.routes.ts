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
                // modal-view component
                path: 'create',
                component: CreateChatComponent,
                children: [
                    {
                        // modal-view component
                        path: 'group-chat',
                        component: CreateGroupChatComponent,
                    },
                ],
            },

            {
                path: ':chatId',
                component: ChatOverviewComponent,
                children: [
                    {
                        // modal-view mode='side' component with extra <router-outlet> for stacking logic
                        path: 'info',
                        component: GroupChatInfoComponent,
                        children: [
                            {
                                // modal-view mode='side' component
                                path: 'members',
                                component: GroupChatMembersComponent,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);
