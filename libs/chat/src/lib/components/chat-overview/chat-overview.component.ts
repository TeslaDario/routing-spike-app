import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat, Message, MOCK_MESSAGES } from '@rapp/shared';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapp-chat-overview',
    templateUrl: 'chat-overview.component.html',
    styleUrls: ['chat-overview.component.scss'],
})
export class ChatOverviewComponent implements OnDestroy {
    messages!: Message[];
    private sub: Subscription;

    constructor(private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe((params) => {
            const groupId = params['chatId'];

            this.loadChatMessages(groupId);
        });
    }

    private loadChatMessages(chatId: Chat['id']): void {
        this.messages = MOCK_MESSAGES.filter((p) => p.chatId === chatId);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
