import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat, MOCK_CHATS } from '@rapp/shared';

@Component({
    selector: 'rapp-chat-list',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.scss'],
})
export class ChatListComponent {
    chats: Chat[] = MOCK_CHATS;

    constructor(private router: Router) {}

    addChat() {
        this.router.navigate(['messages', { outlets: { dialog: ['create-chat'] } }]);
    }
}
