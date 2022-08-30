import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_POSTS, Post } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-newsfeed',
    template: `
        <rapp-combined-view>
            <rapp-group-list></rapp-group-list>
        </rapp-combined-view>
    `,
})
export class NewsfeedComponent {
    posts: Post[] = MOCK_POSTS;

    constructor(private router: Router, private userService: UserService) {}

    openSearch() {
        this.router.navigate(['newsfeed', { outlets: { modal: ['search'] } }]);
    }

    openActivities() {
        this.router.navigate(['activities']);
    }

    openProfile() {
        this.userService.openActor();
    }
}
