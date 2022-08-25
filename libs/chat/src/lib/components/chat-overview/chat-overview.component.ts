import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat, Message, MOCK_MESSAGES, MOCK_USERS, StoreFacade, User } from '@rapp/store';
import { UserService } from '@rapp/users';
import { Subscription } from 'rxjs';

interface UIMessage extends Message {
    author: User | undefined;
}
@Component({
    selector: 'rapp-chat-overview',
    templateUrl: 'chat-overview.component.html',
    styleUrls: ['chat-overview.component.scss'],
})
export class ChatOverviewComponent implements AfterViewInit, OnDestroy {
    newMessage = '';
    messages!: UIMessage[];
    chatId!: Chat['id'];
    author!: User;
    layoutMode$ = this.storeFacade.getMode();
    private sub: Subscription;

    @ViewChild('chatOverviewRef') chatOverviewRef!: ElementRef<HTMLElement>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private storeFacade: StoreFacade,
        private userService: UserService
    ) {
        this.sub = this.route.params.subscribe((params) => {
            this.chatId = params['chatId'];

            this.messages = MOCK_MESSAGES.filter((m) => m.chatId === this.chatId).map((m) => {
                const author = MOCK_USERS.find((u) => u.id === m.userId);
                return { ...m, author };
            });

            setTimeout(() => this.scrollToBottom(), 50);
        });
    }

    ngAfterViewInit(): void {
        this.scrollToBottom();
    }

    openChatInfo() {
        this.router.navigate(['messages', this.chatId, { outlets: { chatGroupInfo: ['group-chat-info'] } }]);
    }

    openProfile(userId: string) {
        this.userService.openProfile(userId);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private scrollToBottom(): void {
        if (this.chatOverviewRef) {
            const chatOverviewEl = this.chatOverviewRef.nativeElement;
            chatOverviewEl.scrollTo(0, chatOverviewEl.scrollHeight);
        }
    }
}
