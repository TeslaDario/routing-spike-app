import { Component, Input } from '@angular/core';
import { CoreStoreFacade } from '@rapp/core/store';

export type SplitSideActive = 'left' | 'right';

@Component({
    selector: 'rapp-split-page',
    templateUrl: 'split-page.component.html',
    styleUrls: ['split-page.component.scss'],
})
export class SplitPageComponent {
    @Input() activeSide: SplitSideActive = 'left';
    layoutMode$ = this.facade.getLayoutMode();

    constructor(private facade: CoreStoreFacade) {}
}
