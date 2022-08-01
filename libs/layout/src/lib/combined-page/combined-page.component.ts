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
    masterWidth$: Observable<number> = this.storeFacade.getMasterWidth();
    detailWidth$: Observable<number> = this.storeFacade.getDetailWidth();

    constructor(private storeFacade: StoreFacade) {}
}
