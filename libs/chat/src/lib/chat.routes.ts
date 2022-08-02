import { RouterModule } from '@angular/router';
import { DialogGuard } from '@rapp/shared';
import { ChatComponent } from './chat.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateGroupChatComponent } from './components/create-group-chat/create-group-chat.component';

export const ChatRoutes = RouterModule.forChild([
    {
        path: 'create-chat',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
        component: CreateChatComponent,
    },
    {
        path: 'create-group-chat',
        outlet: 'dialog',
        canDeactivate: [DialogGuard],
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
