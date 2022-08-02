import { RouterModule } from '@angular/router';
import { ModalGuard } from '@rapp/shared';
import { ChatComponent } from './chat.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateGroupChatComponent } from './components/create-group-chat/create-group-chat.component';

export const ChatRoutes = RouterModule.forChild([
    {
        path: 'create-chat',
        outlet: 'modal',
        canDeactivate: [ModalGuard],
        component: CreateChatComponent,
    },
    {
        path: '',
        component: ChatComponent,
        children: [
            {
                path: 'create-group-chat',
                outlet: 'groupChat',
                canDeactivate: [ModalGuard],
                component: CreateGroupChatComponent,
            },
            {
                path: ':chatId',
                component: ChatOverviewComponent,
            },
        ],
    },
]);
