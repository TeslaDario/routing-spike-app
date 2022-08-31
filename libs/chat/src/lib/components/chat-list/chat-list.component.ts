import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat, MOCK_CHATS, StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-chat-list',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.scss'],
})
export class ChatListComponent {
    chats: Chat[] = MOCK_CHATS;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private storeFacade: StoreFacade) {}

    addChat() {
        this.router.navigate(['messages', { outlets: { chatCreate: ['create-chat'] } }]);
    }
}
