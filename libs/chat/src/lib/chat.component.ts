import { Component } from '@angular/core';

@Component({
    selector: 'rapp-chat',
    template: `
        <rapp-combined-page>
            <rapp-chat-list></rapp-chat-list>
        </rapp-combined-page>

        <!-- ORDER OF AUXILARY ROUTES IS IMPORTANT -->
        <router-outlet name="chatCreate"></router-outlet>
        <router-outlet name="chatGroupCreate"></router-outlet>
    `,
})
export class ChatComponent {}
