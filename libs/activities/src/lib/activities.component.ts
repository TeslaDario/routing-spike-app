import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-activities',
    templateUrl: 'activities.component.html',
})
export class ActivitiesComponent {
    layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private storeFacade: StoreFacade) {}

    goBack() {
        window.history.back();
    }
}
