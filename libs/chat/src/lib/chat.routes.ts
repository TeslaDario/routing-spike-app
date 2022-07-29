import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateGroupChatComponent } from './components/create-group-chat/create-group-chat.component';

export const ChatRoutes = RouterModule.forChild([
    {
        path: 'create-chat',
        outlet: 'dialog',
        component: CreateChatComponent,
    },
    {
        path: 'create-group-chat',
        outlet: 'dialog',
        component: CreateGroupChatComponent,
    },
    {
        path: '',
        component: ChatComponent,
        children: [
            {
                path: ':chatId',
                component: ChatOverviewComponent,
            },
        ],
    },
]);
