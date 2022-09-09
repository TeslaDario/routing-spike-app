import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutMode, StoreFacade } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-group-chat-info',
    template: `
        <rapp-modal-view mode="side">
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left
                        [icon]="layoutMode === 'triple' ? 'close' : 'back'"
                        title="GROUP CHAT INFO"
                    ></rapp-toolbar-left>
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
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class GroupChatInfoComponent {
    layoutMode!: LayoutMode;

    constructor(private router: Router, private userService: UserService, private storeFacade: StoreFacade) {
        console.log('GroupChatInfoComponent - constructor');
        this.storeFacade.getMode().subscribe((mode) => (this.layoutMode = mode));
    }

    openProfile() {
        this.userService.openActor();
    }

    openMembers() {
        this.router.navigate(['messages', 'c1', 'info', 'members']);
    }
}
