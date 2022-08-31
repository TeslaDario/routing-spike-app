import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class DrawerService {
    drawerPath!: string;
    private _drawer!: MatSidenav;
    set drawer(drawer: MatSidenav) {
        this._drawer = drawer;
        this.drawerPath = this.location.path();
    }
    get drawer(): MatSidenav {
        return this._drawer;
    }

    get drawerOpened(): boolean {
        return this._drawer?._animationState === 'open' || false;
    }
    constructor(private location: Location) {}
}
