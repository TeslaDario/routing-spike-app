import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group, MOCK_POSTS, Post } from '@rapp/shared';
import { StoreFacade } from '@rapp/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapp-group-overview',
    templateUrl: 'group-overview.component.html',
})
export class GroupOverviewComponent implements OnDestroy {
    posts!: Post[];
    layoutMode$ = this.storeFacade.getMode();
    private sub: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private storeFacade: StoreFacade) {
        this.sub = this.route.params.subscribe((params) => {
            const groupId = params['groupId'];

            this.loadGroupPosts(groupId);
        });
    }

    openGroupInfo() {
        this.router.navigate(['groups', { outlets: { dialog: ['info'] } }]);
    }

    openGroupMembers() {
        this.router.navigate(['groups', { outlets: { dialog: ['members'] } }]);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    private loadGroupPosts(groupId: Group['id']): void {
        this.posts = MOCK_POSTS.filter((p) => p.groupId === groupId);
    }
}
