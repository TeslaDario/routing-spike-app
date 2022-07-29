import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DialogGuard implements CanDeactivate<any> {
    constructor(private dialog: MatDialog, private router: Router, private location: Location) {}

    canDeactivate(
        currentRoute: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.closeDialog(currentRoute);
    }

    private closeDialog(
        currentRoute: ActivatedRouteSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | Promise<boolean> | boolean {
        const openrefs = this.dialog.openDialogs;
        if (openrefs.length === 0) {
            // If current no dialog open, pops current angular router entry normally.
            return true;
        } else {
            console.log('DialogGuard', openrefs[openrefs.length - 1]);
            // fix navigation history, see github issue for more details
            // https://github.com/angular/angular/issues/13586
            // const currentUrlTree = this.router.createUrlTree([], { ...currentRoute, fragment: undefined });
            // const currentUrl = currentUrlTree.toString();
            // this.location.go(currentUrl);

            openrefs[openrefs.length - 1].close();
            return true;
        }
    }
}
