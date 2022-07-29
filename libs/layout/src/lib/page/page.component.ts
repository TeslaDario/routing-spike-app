import { Component, Input } from '@angular/core';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-page',
    templateUrl: 'page.component.html',
    styleUrls: ['page.component.scss'],
})
export class PageComponent {
    @Input() title = '';
    layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}
}
