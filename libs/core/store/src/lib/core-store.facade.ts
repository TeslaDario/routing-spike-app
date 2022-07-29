import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as CoreStoreSelectors from './core-store.selectors';

@Injectable()
export class CoreStoreFacade {
    constructor(private readonly store: Store) {}

    getLayoutMode() {
        return this.store.pipe(select(CoreStoreSelectors.getLayoutMode));
    }
}
