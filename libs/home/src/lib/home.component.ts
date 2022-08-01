import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent {
    items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];
    layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private storeFacade: StoreFacade) {}

    openProfile() {
        this.router.navigate([{ outlets: { profile: ['users', 'me'] } }]);
    }

    openSettings() {
        this.router.navigate(['home', { outlets: { dialog: ['settings'] } }]);
    }
}
