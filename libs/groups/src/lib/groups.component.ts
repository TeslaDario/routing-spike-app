import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SplitSideActive } from '@rapp/layout';
import { distinctUntilChanged, filter, of, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
    selector: 'rapp-groups',
    templateUrl: 'groups.component.html',
})
export class GroupsComponent implements OnDestroy {
    splitSideActive!: SplitSideActive;
    private _destroyed$ = new Subject();

    constructor(private router: Router, private route: ActivatedRoute) {
        this.router.events
            .pipe(
                takeUntil(this._destroyed$),
                filter((event) => event instanceof NavigationEnd),
                switchMap(() => (this.route.firstChild ? this.route.firstChild.params : of({}))),
                distinctUntilChanged()
            )
            .subscribe((params) => {
                this.splitSideActive = params['groupId'] ? 'right' : 'left';
            });
    }

    openGroupInfo() {
        this.router.navigate(['groups', { outlets: { dialog: ['group-info-copy'] } }]);
    }

    ngOnDestroy(): void {
        this._destroyed$.complete();
    }
}
