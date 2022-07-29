import { Component, ContentChild, ViewEncapsulation } from '@angular/core';
import { IState, StoreFacade } from '@rapp/store';
import { Observable } from 'rxjs';
import { CombinedViewDetailDirective } from './combined-view-detail.directive';

@Component({
    selector: 'rapp-combined-view',
    templateUrl: './combined-view.component.html',
    styleUrls: ['./combined-view.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CombinedViewComponent {
    @ContentChild(CombinedViewDetailDirective) detail!: CombinedViewDetailDirective;

    layoutMode$: Observable<IState['mode']> = this.storeFacade.getMode();
    masterWidth$: Observable<number> = this.storeFacade.getMasterWidth();
    detailWidth$: Observable<number> = this.storeFacade.getDetailWidth();

    constructor(private storeFacade: StoreFacade) {}
}
