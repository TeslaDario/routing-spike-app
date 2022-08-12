import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-group-chat-info',
    template: `
        <rapp-modal-page>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="GROUP CHAT INFO"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <rapp-avatar (click)="openProfile()"></rapp-avatar>

                        <br />
                        <button mat-flat-button (click)="openMembers()" color="accent">Go to members</button>
                        <br />
                        <button mat-flat-button [rappBackButton] color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal-page>
    `,
})
export class GroupChatInfoComponent {
    constructor(private router: Router) {
        console.log('GroupChatInfoComponent - constructor');
    }

    openProfile() {
        this.router.navigate([{ outlets: { users: ['users', 'me'] } }]);
    }

    openMembers() {
        this.router.navigate(['messages', 'c1', { outlets: { chatGroupMembers: ['group-chat-members'] } }]);
    }
}
