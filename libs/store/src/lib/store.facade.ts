import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as StoreActions from './store.actions';
import * as StoreSelectors from './store.selectors';

@Injectable()
export class StoreFacade {
    constructor(private readonly store: Store) {}

    getMode() {
        return this.store.pipe(select(StoreSelectors.getMode));
    }

    getMasterWidth(): Observable<number> {
        return this.store.pipe(select(StoreSelectors.getMasterWidth));
    }

    getDetailWidth(): Observable<number> {
        return this.store.pipe(select(StoreSelectors.getDetailWidth));
    }

    adjustDetailWidth(menuOpened: boolean): void {
        this.store.dispatch(StoreActions.adjustDetailWidth({ menuOpened }));
    }
}
