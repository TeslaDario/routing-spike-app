import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutMode, MOCK_POSTS, StoreFacade } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-modal-view mode="side">
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left
                        [icon]="layoutMode === 'triple' ? 'close' : 'back'"
                        title="GROUP INFO"
                    ></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <input type="text" placeholder="State" [(ngModel)]="someData" />

                        <rapp-avatar (click)="openProfile()"></rapp-avatar>

                        <br />
                        <button mat-flat-button (click)="openMembers()" color="accent">Go to members</button>
                        <br />
                        <button mat-flat-button (click)="goToPost()" color="primary">Go to post route</button>
                        <br />
                        <button mat-flat-button [rappBackButton] color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class GroupInfoComponent {
    someData = '';
    layoutMode!: LayoutMode;

    constructor(private router: Router, private userService: UserService, private storeFacade: StoreFacade) {
        console.log('GroupInfoComponent - constructor');
        this.storeFacade.getMode().subscribe((mode) => (this.layoutMode = mode));
    }

    openProfile() {
        this.userService.openActor();
    }

    openMembers() {
        if (this.layoutMode === 'triple') {
            this.router.navigate(['newsfeed', 'g1', 'members']);
        } else {
            this.router.navigate(['newsfeed', 'g1', 'info', 'members']);
        }
    }

    goToPost() {
        this.router.navigate(['newsfeed', MOCK_POSTS[0].groupId, 'post', MOCK_POSTS[0].id]);
    }
}
