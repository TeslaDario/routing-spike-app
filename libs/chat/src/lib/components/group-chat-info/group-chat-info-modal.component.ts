import { Component } from '@angular/core';

@Component({
    selector: 'rapp-group-chat-info-modal',
    template: `
        <rapp-modal-view>
            <rapp-group-chat-info></rapp-group-chat-info>
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class GroupChatInfoModalComponent {}
