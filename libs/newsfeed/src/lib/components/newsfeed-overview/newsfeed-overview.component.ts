import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_POSTS, Post, StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-newsfeed-overview',
    templateUrl: 'newsfeed-overview.component.html',
    styles: [
        `
            .newsfeed-overview-content {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                height: 100%;

                rapp-post-feed {
                    flex: 1 1 100%;
                    overflow: scroll;
                }
                rapp-newsfeed-aside {
                    flex: 0 0 var(--master-width);
                    overflow: scroll;
                }
            }
        `,
    ],
})
export class NewsfeedOverviewComponent {
    posts: Post[] = MOCK_POSTS;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade, private router: Router) {}

    openGroups() {
        this.router.navigate(['newsfeed', 'groups'], { skipLocationChange: true });
    }

    addPost() {
        this.router.navigate(['newsfeed', { outlets: { modal: ['create-post'] } }]);
    }

    openActivities() {
        this.router.navigate(['activities']);
    }

    openSearch() {
        this.router.navigate(['newsfeed', 'search']);
    }

    openScheduledPost() {
        this.router.navigate(['newsfeed', 'scheduled']);
    }
}
