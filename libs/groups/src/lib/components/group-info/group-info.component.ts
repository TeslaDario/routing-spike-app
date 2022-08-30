import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_POSTS } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-view>
            <rapp-toolbar>
                <rapp-toolbar-left icon="back" title="GROUP INFO"></rapp-toolbar-left>
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
    `,
})
export class GroupInfoComponent {
    someData = '';

    constructor(private router: Router, private userService: UserService) {
        console.log('GroupInfoComponent - constructor');
    }

    openProfile() {
        this.userService.openActor();
    }

    openMembers() {
        this.router.navigate(['newsfeed', 'g1', 'info', 'members']);
    }

    goToPost() {
        this.router.navigate(['newsfeed', MOCK_POSTS[0].groupId, 'post', MOCK_POSTS[0].id]);
    }
}
