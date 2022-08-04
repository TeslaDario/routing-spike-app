import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { CanDeactivateModal } from './modal.guard';

@Injectable({ providedIn: 'root' })
export class UploadGuard implements CanDeactivate<CanDeactivateModal> {
    constructor(private dialog: MatDialog, private router: Router, private location: Location) {}

    canDeactivate(component: CanDeactivateModal, currentRoute: ActivatedRouteSnapshot): Observable<boolean> {
        if ('canDeactivateModal' in component) {
            return component.canDeactivateModal().pipe(
                tap((can) => {
                    if (!can) {
                        //  fix navigation history, see github issue for more details
                        // https://github.com/angular/angular/issues/13586
                        const currentUrlTree = this.router.createUrlTree([], {
                            ...currentRoute,
                            fragment: undefined,
                        });
                        const currentUrl = currentUrlTree.toString();
                        this.location.go(currentUrl);
                    }
                })
            );
        }

        return of(true);
    }
}
