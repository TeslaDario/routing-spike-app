import { Location, LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    // private history: string[] = ['/'];

    constructor(
        private router: Router,
        private location: Location,
        private locationStrategy: LocationStrategy,
        private dialog: MatDialog
    ) {
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         this.history.push(event.urlAfterRedirects);
        //     }
        // });
    }

    // back(): void {
    //     this.history.pop();
    //     if (this.history.length > 0) {
    //         this.location.back();
    //     } else {
    //         this.router.navigateByUrl('/');
    //     }
    // }

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
