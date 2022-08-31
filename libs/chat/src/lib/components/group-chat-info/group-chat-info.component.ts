import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-group-chat-info',
    template: `
        <rapp-view>
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
        </rapp-view>
    `,
})
export class GroupChatInfoComponent {
    constructor(private router: Router, private userService: UserService) {
        console.log('GroupChatInfoComponent - constructor');
    }

    openProfile() {
        this.userService.openActor();
    }

    openMembers() {
        this.router.navigate(['messages', 'c1', 'info', 'members']);
    }
}
