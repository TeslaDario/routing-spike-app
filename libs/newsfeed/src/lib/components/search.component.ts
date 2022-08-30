import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_POSTS } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-search',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" style="width: 100%;">
                        <rapp-search-input></rapp-search-input>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div class="flex align-center">
                            <rapp-avatar (click)="openProfile()"></rapp-avatar>
                            Some User
                        </div>
                        <br />

                        <ng-container *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]">
                            <button mat-flat-button (click)="replaceToPost()" color="primary">
                                Go to post route (replace state)
                            </button>
                            <br />
                            <br />
                            <button mat-flat-button (click)="goToPost()" color="primary">
                                Go to post route (push state)
                            </button>
                            <br />
                            <br />
                        </ng-container>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
})
export class SearchComponent {
    constructor(private router: Router, private userService: UserService) {
        console.log('SearchComponent - constructor');
    }

    openProfile() {
        this.userService.openActor();
    }

    replaceToPost() {
        // Navigation from modal should use replaceUrl
        // if we dont wont to track going back to that modal with back button
        this.router.navigate(['newsfeed', MOCK_POSTS[0].groupId, 'post', MOCK_POSTS[0].id], { replaceUrl: true });
    }

    goToPost() {
        this.router.navigate(['newsfeed', MOCK_POSTS[0].groupId, 'post', MOCK_POSTS[0].id]);
    }
}
