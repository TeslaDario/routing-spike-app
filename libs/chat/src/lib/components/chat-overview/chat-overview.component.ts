import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat, Message, MOCK_MESSAGES, MOCK_USERS, StoreFacade, User } from '@rapp/store';
import { Subscription } from 'rxjs';

interface UIMessage extends Message {
    author: User | undefined;
}
@Component({
    selector: 'rapp-chat-overview',
    templateUrl: 'chat-overview.component.html',
    styleUrls: ['chat-overview.component.scss'],
})
export class ChatOverviewComponent implements OnDestroy {
    messages!: UIMessage[];
    author!: User;
    layoutMode$ = this.storeFacade.getMode();
    private sub: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private storeFacade: StoreFacade) {
        this.sub = this.route.params.subscribe((params) => {
            const groupId = params['chatId'];

            this.loadChatMessages(groupId);
        });
    }

    openProfile(userId?: string) {
        this.router.navigate([{ outlets: { users: ['users', userId] } }]);
    }

    private loadChatMessages(chatId: Chat['id']): void {
        this.messages = MOCK_MESSAGES.filter((m) => m.chatId === chatId).map((m) => {
            const author = MOCK_USERS.find((u) => u.id === m.userId);
            return { ...m, author };
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
