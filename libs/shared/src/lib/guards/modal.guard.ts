import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanDeactivateModal> {
//
export interface CanDeactivateModal {
    canDeactivateModal: () => Observable<boolean>;
}

@Injectable({
    providedIn: 'root',
})
export class ModalGuard implements CanDeactivate<CanDeactivateModal> {
    constructor(private dialog: MatDialog, private router: Router, private location: Location) {}

    canDeactivate(
        component: CanDeactivateModal,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> {
        const openDialogs = this.dialog.openDialogs;
        if (openDialogs.length) {
            if ('canDeactivateModal' in component) {
                console.log('DialogGuard - canDeactivateModal', openDialogs[openDialogs.length - 1]?.id);

                return component.canDeactivateModal().pipe(
                    tap((can) => {
                        console.log('DialogGuard - canDeactivateModal', can, openDialogs[openDialogs.length - 1]?.id);
                        if (!can) {
                            //  fix navigation history, see github issue for more details
                            // https://github.com/angular/angular/issues/13586
                            const currentUrlTree = this.router.createUrlTree([], {
                                ...currentRoute,
                                fragment: undefined,
                            });
                            const currentUrl = currentUrlTree.toString();
                            this.location.go(currentUrl);
                        } else {
                            openDialogs[openDialogs.length - 1]?.close();
                        }
                    })
                );
            } else {
                console.log('DialogGuard - closing', openDialogs[openDialogs.length - 1].id);
                openDialogs[openDialogs.length - 1].close();
            }
        }

        return of(true);
    }
}
