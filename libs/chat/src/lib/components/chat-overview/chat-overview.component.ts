import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat, LayoutMode, Message, MOCK_MESSAGES, MOCK_USERS, StoreFacade, User } from '@rapp/store';
import { UserService } from '@rapp/users';
import { Subject, takeUntil } from 'rxjs';

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
    layoutMode!: LayoutMode;
    private destroyed$ = new Subject();

    @ViewChild('chatOverviewRef') chatOverviewRef!: ElementRef<HTMLElement>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private storeFacade: StoreFacade,
        private userService: UserService
    ) {
        this.storeFacade
            .getMode()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((mode) => (this.layoutMode = mode));

        this.route.params.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
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
        this.router.navigate(['messages', this.chatId, 'info']);
    }

    openProfile(userId: string) {
        this.userService.openProfile(userId);
    }

    ngOnDestroy(): void {
        this.destroyed$.complete();
    }

    private scrollToBottom(): void {
        if (this.chatOverviewRef) {
            const chatOverviewEl = this.chatOverviewRef.nativeElement;
            chatOverviewEl.scrollTo(0, chatOverviewEl.scrollHeight);
        }
    }
}
