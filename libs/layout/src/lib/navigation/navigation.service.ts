import { Location, LocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DrawerService } from '../views/drawer-view/drawer.service';

@Injectable({ providedIn: 'root' })
export class NavigationService {
    constructor(
        private location: Location,
        private locationStrategy: LocationStrategy,
        private dialog: MatDialog,
        private drawerService: DrawerService
    ) {}

    public goBack(relativePosition?: number | undefined): void {
        const currentPath = this.location.path();

        // handle drawer closing for back from drawer component and inside modal-view
        const { drawer, drawerOpened, drawerPath } = this.drawerService;
        if (typeof relativePosition === 'number' && relativePosition > 1 && drawerOpened) {
            relativePosition -= 1;
            drawer.close();
        } else if (drawerOpened && currentPath === drawerPath) {
            drawer.close();
            return;
        }

        // handle navigation API
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
                    console.log('ovde');
                    this.location.back();
                }
            }, 250);
        }
    }
}
