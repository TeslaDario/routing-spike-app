import { Component } from '@angular/core';

@Component({
    selector: 'rapp-chat',
    template: `
        <rapp-combined-page>
            <rapp-chat-list></rapp-chat-list>
        </rapp-combined-page>
        <router-outlet name="groupChat"></router-outlet>
    `,
})
export class ChatComponent {}
