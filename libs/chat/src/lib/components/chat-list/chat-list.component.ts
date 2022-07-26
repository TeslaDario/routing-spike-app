import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chat, DialogOneComponent, MOCK_CHATS } from '@rapp/shared';

@Component({
    selector: 'rapp-chat-list',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.scss'],
})
export class ChatListComponent {
    chats: Chat[] = MOCK_CHATS;

    constructor(public dialog: MatDialog) {}

    addChat() {
        const dialogRef = this.dialog.open(DialogOneComponent, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('[CHAT] The dialog one was closed');
        });
    }
}
