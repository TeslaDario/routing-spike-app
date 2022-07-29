import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { CoreStoreEffects, CoreStoreFacade } from '@rapp/core/store';
import { Subscription } from 'rxjs';

@Directive({ selector: '[rappLayout]' })
export class LayoutDirective implements OnDestroy {
    private sub!: Subscription;

    constructor(private coreStoreFacade: CoreStoreFacade, private elRef: ElementRef<HTMLElement>) {
        this.sub = this.coreStoreFacade.getLayoutMode().subscribe((mode) => {
            console.log('mode', mode);
            CoreStoreEffects.setMode(this.elRef.nativeElement, mode);
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
