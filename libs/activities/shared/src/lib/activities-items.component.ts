import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_CHATS, MOCK_GROUPS, MOCK_POSTS } from '@rapp/store';

@Component({
    selector: 'rapp-activities-items',
    template: `
        <ng-container *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]">
            <button mat-button (click)="openChat()" color="accent">Activity {{ i }} for chat</button>
            <br />
            <button mat-button (click)="openPost()" color="primary">Activity {{ i }} for post</button>
            <br />
        </ng-container>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
})
export class ActivitiesItemsComponent {
    constructor(private router: Router) {}

    openChat() {
        this.router.navigate(['messages', MOCK_CHATS[0].id]);
    }
    openPost() {
        this.router.navigate(['newsfeed', MOCK_GROUPS[0].id, 'post', MOCK_POSTS[0].id]);
    }
}
