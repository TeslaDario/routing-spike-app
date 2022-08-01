import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MOCK_POSTS, Post } from '@rapp/shared';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-newsfeed',
    templateUrl: 'newsfeed.component.html',
    styleUrls: ['newsfeed.component.scss'],
})
export class NewsfeedComponent {
    posts: Post[] = MOCK_POSTS;
    layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private route: ActivatedRoute, private storeFacade: StoreFacade) {}

    openActivities() {
        // this.router.navigate(['newsfeed', { outlets: { dialog: ['activities'] } }]);
        this.router.navigate([{ outlets: { dialog: ['activities'] } }], { relativeTo: this.route });
    }
}
