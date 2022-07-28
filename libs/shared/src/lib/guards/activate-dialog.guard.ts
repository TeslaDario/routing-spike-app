import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ActivateDialogGuard implements CanActivate {
    constructor(private dialog: MatDialog) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const alreadyOpen = this.dialog.openDialogs.some((d) => d.id === route.url[0].path);
        console.log('alreadyOpen', '"' + route.url[0].path + '"', alreadyOpen);
        return !alreadyOpen;
    }
}
