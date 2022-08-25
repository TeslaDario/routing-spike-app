import { Location, LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    // private tabs: BehaviorSubject<NavTab[]> = new BehaviorSubject(TABS);
    // tabs$ = this.tabs.asObservable();

    constructor(
        private router: Router,
        private location: Location,
        private locationStrategy: LocationStrategy,
        private dialog: MatDialog
    ) // private storeFacade: StoreFacade
    {
        // combineLatest([
        //     this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
        //     this.storeFacade.getMode(),
        // ]).subscribe(([event, mode]) => {
        //     this.tabs.next(
        //         TABS.map((t) => {
        //             if (event.url === '/') {
        //                 return { ...t, active: t.route.startsWith('/newsfeed') };
        //             }
        //             if (mode === 'double' && t.route === '/messages') {
        //                 return { ...t, param: MOCK_CHATS[0].id, active: event.url.startsWith(t.route) };
        //             }
        //             return { ...t, active: event.url.startsWith(t.route) };
        //         })
        //     );
        // });
    }

    public goBack(relativePosition?: number | undefined): void {
        const currentPath = this.location.path();
        if (typeof relativePosition === 'number' && relativePosition > 0 && this.locationStrategy.historyGo) {
            this.locationStrategy.historyGo(-relativePosition);
        } else {
            this.location.back();
        }

        // Force back action if history can't go back by relative position!
        // and if dialogs are not open (as they are not in navigation state)
        const openDialogs = this.dialog.openDialogs;
        if (!openDialogs.length) {
            setTimeout(() => {
                if (currentPath === this.location.path()) {
                    this.location.back();
                }
            }, 250);
        }
    }
}
