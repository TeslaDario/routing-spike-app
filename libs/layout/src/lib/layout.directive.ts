import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { CoreStoreFacade } from '@rapp/core/store';

@Directive({ selector: '[rappLayout]' })
export class LayoutDirective {
    constructor(private coreStoreFacade: CoreStoreFacade, private elRef: ElementRef, private renderer: Renderer2) {
        console.log('dsa', this.elRef);
        this.coreStoreFacade.getLayoutMode().subscribe((mode) => {
            if (mode === 'single') {
                this.renderer.addClass(this.elRef.nativeElement, 'page-layout-single');
                this.renderer.removeClass(this.elRef.nativeElement, 'page-layout-split');
            } else {
                this.renderer.addClass(this.elRef.nativeElement, 'page-layout-split');
                this.renderer.removeClass(this.elRef.nativeElement, 'page-layout-single');
            }
        });
    }
}
