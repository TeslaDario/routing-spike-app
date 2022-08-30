import { Component } from '@angular/core';
import { IState, StoreFacade } from '@rapp/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'rapp-combined-page',
    templateUrl: './combined-page.component.html',
    styleUrls: ['./combined-page.component.scss'],
})
export class CombinedPageComponent {
    layoutMode$: Observable<IState['mode']> = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}
}
