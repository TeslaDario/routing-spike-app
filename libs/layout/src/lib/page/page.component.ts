import { Component, Input } from '@angular/core';
import { CoreStoreFacade } from '@rapp/core/store';

@Component({
    selector: 'rapp-page',
    templateUrl: 'page.component.html',
    styleUrls: ['page.component.scss'],
})
export class PageComponent {
    @Input() title = '';
    layoutMode$ = this.facade.getLayoutMode();

    constructor(private facade: CoreStoreFacade) {}
}
