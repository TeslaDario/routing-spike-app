import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class SomeCanDeactivateGuard implements CanDeactivate<CanDeactivatePage> {
//   e.g. export class SomeComponent implements CanDeactivatePage {
export interface CanDeactivatePage {
    canDeactivatePage: () => Observable<boolean>;
}

@Injectable({ providedIn: 'root' })
export class CanDeactivatePageGuard implements CanDeactivate<CanDeactivatePage> {
    constructor(private dialog: MatDialog, private router: Router, private location: Location) {}

    canDeactivate(component: CanDeactivatePage, currentRoute: ActivatedRouteSnapshot): Observable<boolean> {
        // check if dialogs are present before checking if the page can be deactivated
        const openDialogs = this.dialog.openDialogs;
        if (openDialogs.length) {
            this.fixNavigationHistory(currentRoute);
            openDialogs[openDialogs.length - 1].close();
            return of(false);
        } else if ('canDeactivatePage' in component) {
            return component.canDeactivatePage().pipe(
                tap((can) => {
                    if (!can) {
                        this.fixNavigationHistory(currentRoute);
                    }
                })
            );
        }

        return of(true);
    }

    /**
     * Fix navigation state for deactivate guard
     * @see https://github.com/angular/angular/issues/13586 for more details
     * @param currentRoute
     */
    private fixNavigationHistory(currentRoute: ActivatedRouteSnapshot): void {
        const currentUrlTree = this.router.createUrlTree([], {
            ...currentRoute,
            fragment: undefined,
        });
        const currentUrl = currentUrlTree.toString();
        this.location.go(currentUrl);
    }
}
