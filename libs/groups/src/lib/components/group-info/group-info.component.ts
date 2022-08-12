import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalPageComponent } from '@rapp/layout';
import { MOCK_POSTS } from '@rapp/store';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-modal-page>
            <rapp-page>
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
            </rapp-page>
        </rapp-modal-page>
        <router-outlet></router-outlet>
    `,
})
export class GroupInfoComponent {
    @ViewChild(ModalPageComponent) modal!: ModalPageComponent;
    someData = '';

    constructor(private router: Router) {
        console.log('GroupInfoComponent - constructor');
    }

    openProfile() {
        this.router.navigate([{ outlets: { users: ['users', 'me'] } }]);
    }

    openMembers() {
        this.router.navigate(['groups', 'g1', 'info', 'members']);
    }

    goToPost() {
        this.router.navigate(['groups', MOCK_POSTS[0].groupId, 'post', MOCK_POSTS[0].id]);
    }
}
