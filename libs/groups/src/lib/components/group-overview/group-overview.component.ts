import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group, MOCK_POSTS, Post, StoreFacade } from '@rapp/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapp-group-overview',
    templateUrl: 'group-overview.component.html',
})
export class GroupOverviewComponent implements OnDestroy {
    posts!: Post[];
    groupId!: Group['id'];
    layoutMode$ = this.storeFacade.getMode();
    private sub: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private storeFacade: StoreFacade) {
        this.sub = this.route.params.subscribe((params) => {
            this.groupId = params['groupId'];

            this.posts = MOCK_POSTS.filter((p) => p.groupId === this.groupId);
        });
    }

    openGroupInfo() {
        this.router.navigate(['newsfeed', 'g1', 'info']);
    }

    addPost() {
        this.router.navigate([{ outlets: { modal: ['create-post'] } }]);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
