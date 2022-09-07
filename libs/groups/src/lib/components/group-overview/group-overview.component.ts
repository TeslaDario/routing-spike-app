import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group, LayoutMode, MOCK_POSTS, Post, StoreFacade } from '@rapp/store';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'rapp-group-overview',
    templateUrl: 'group-overview.component.html',
})
export class GroupOverviewComponent implements OnDestroy {
    posts!: Post[];
    groupId!: Group['id'];
    layoutMode!: LayoutMode;
    drawerOpened = false;
    private destroyed$ = new Subject();

    constructor(private router: Router, private route: ActivatedRoute, private storeFacade: StoreFacade) {
        this.storeFacade
            .getMode()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((mode) => (this.layoutMode = mode));

        this.route.params.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
            this.groupId = params['groupId'];

            this.posts = MOCK_POSTS.filter((p) => p.groupId === this.groupId);
        });
    }

    openGroupInfo() {
        if (this.layoutMode === 'triple') {
            this.drawerOpened = true;
        } else {
            this.router.navigate(['newsfeed', 'g1', 'info']);
        }
    }

    addPost() {
        this.router.navigate(['newsfeed', { outlets: { modal: ['create-post'] } }]);
    }

    ngOnDestroy(): void {
        this.destroyed$.complete();
    }
}
