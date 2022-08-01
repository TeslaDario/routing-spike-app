import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat, MOCK_CHATS } from '@rapp/shared';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-chat-list',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.scss'],
})
export class ChatListComponent {
    chats: Chat[] = MOCK_CHATS;
    layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private storeFacade: StoreFacade) {}

    addChat() {
        this.router.navigate(['messages', { outlets: { dialog: ['create-chat'] } }]);
    }
}
