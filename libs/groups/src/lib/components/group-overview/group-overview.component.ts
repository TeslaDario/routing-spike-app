import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group, MOCK_POSTS, Post } from '@rapp/shared';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapp-group-overview',
    templateUrl: 'group-overview.component.html',
    styleUrls: ['group-overview.component.scss'],
})
export class GroupOverviewComponent implements OnDestroy {
    posts!: Post[];
    private sub: Subscription;

    constructor(private route: ActivatedRoute) {
        this.sub = this.route.params.subscribe((params) => {
            const groupId = params['groupId'];

            this.loadGroupPosts(groupId);
        });
    }

    private loadGroupPosts(groupId: Group['id']): void {
        this.posts = MOCK_POSTS.filter((p) => p.groupId === groupId);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
