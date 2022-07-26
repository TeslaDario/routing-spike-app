import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatOverviewComponent } from './components/chat-overview/chat-overview.component';

export const ChatRoutes = RouterModule.forChild([
    // {
    //     path: ':chatId',
    //     component: ChatComponent,
    // },
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
