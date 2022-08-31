import { Component } from '@angular/core';

@Component({
    selector: 'rapp-chat',
    template: `
        <rapp-combined-view>
            <rapp-chat-list></rapp-chat-list>
        </rapp-combined-view>
    `,
})
export class ChatComponent {}
