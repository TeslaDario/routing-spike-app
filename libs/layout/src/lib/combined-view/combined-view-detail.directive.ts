import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'rapp-combined-view-detail, [rappCombinedViewDetail]',
})
export class CombinedViewDetailDirective {
    @Input() active = false;
}
