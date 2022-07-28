import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Chat, MOCK_CHATS } from '@rapp/shared';

@Component({
    selector: 'rapp-chat-list',
    templateUrl: 'chat-list.component.html',
    styleUrls: ['chat-list.component.scss'],
})
export class ChatListComponent {
    chats: Chat[] = MOCK_CHATS;

    constructor(private router: Router, private dialog: MatDialog) {}

    addChat() {
        this.router.navigate(['messages', { outlets: { dialog: ['create-chat'] } }]);

        // const dialogRef = this.dialog.open(DialogOneComponent, {
        //     width: '90vw',
        //     maxWidth: '90vw',
        //     height: '80vh',
        // });

        // dialogRef.afterClosed().subscribe((result) => {
        //     console.log('[CHAT] The dialog one was closed');
        // });
    }
}
