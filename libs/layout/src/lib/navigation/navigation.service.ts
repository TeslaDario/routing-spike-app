import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    constructor(private location: Location, private dialog: MatDialog) {}

    public goBack(relativePosition?: number | undefined): void {
        const currentPath = this.location.path();

        // handle navigation API
        if (typeof relativePosition === 'number' && relativePosition > 0) {
            this.location.historyGo(-relativePosition);
        } else {
            this.location.back();
        }

        // force back action if history can't go back by relative position!
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
