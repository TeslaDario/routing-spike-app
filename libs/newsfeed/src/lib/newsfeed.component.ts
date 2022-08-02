import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MOCK_POSTS, Post, StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-newsfeed',
    templateUrl: 'newsfeed.component.html',
})
export class NewsfeedComponent {
    posts: Post[] = MOCK_POSTS;
    layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private route: ActivatedRoute, private storeFacade: StoreFacade) {}

    openActivities() {
        this.router.navigate(['activities']);
    }

    openSearch() {
        this.router.navigate(['newsfeed', { outlets: { dialog: ['search'] } }]);
    }
}
