import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as CoreStoreActions from './core-store.actions';
import * as CoreStoreSelectors from './core-store.selectors';

@Injectable()
export class CoreStoreFacade {
    /**
     * Combine pieces of state using createSelector,
     * and expose them as observables through the facade.
     */
    loaded$ = this.store.pipe(select(CoreStoreSelectors.getCoreStoreLoaded));
    allCoreStore$ = this.store.pipe(select(CoreStoreSelectors.getAllCoreStore));
    selectedCoreStore$ = this.store.pipe(select(CoreStoreSelectors.getSelected));

    constructor(private readonly store: Store) {}

    /**
     * Use the initialization action to perform one
     * or more tasks in your Effects.
     */
    init() {
        this.store.dispatch(CoreStoreActions.initCoreStore());
    }
}