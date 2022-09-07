import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CanActivateUserModalGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let userId = null;
        route.children.forEach((child) => {
            if (child.outlet === 'users') {
                userId = child.firstChild?.url.toString() || null;
            }
        });

        // todo: consider the logic to preserve url if actor have access to eg. messages/:chatId(users:users/id) route
        // todo: consider the logic when second auxiliary router is active (eg. media)
        if (userId && this.userInRootRoute(state.url, userId)) {
            this.router.navigate([{ outlets: { users: ['users', userId] } }], { replaceUrl: true });
            return false;
        }
        return true;
    }

    private userInRootRoute(url: string, userId: string): boolean {
        return url !== `/newsfeed(users:users/${userId})`;
    }
}
