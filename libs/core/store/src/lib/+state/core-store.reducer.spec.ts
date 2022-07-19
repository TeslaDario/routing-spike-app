import { Action } from '@ngrx/store';

import * as CoreStoreActions from './core-store.actions';
import { CoreStoreEntity } from './core-store.models';
import { coreStoreReducer, CoreStoreState, initialCoreStoreState } from './core-store.reducer';

describe('CoreStore Reducer', () => {
    const createCoreStoreEntity = (id: string, name = ''): CoreStoreEntity => ({
        id,
        name: name || `name-${id}`,
    });

    describe('valid CoreStore actions', () => {
        it('loadCoreStoreSuccess should return the list of known CoreStore', () => {
            const coreStore = [createCoreStoreEntity('PRODUCT-AAA'), createCoreStoreEntity('PRODUCT-zzz')];
            const action = CoreStoreActions.loadCoreStoreSuccess({ coreStore });

            const result: CoreStoreState = coreStoreReducer(initialCoreStoreState, action);

            expect(result.loaded).toBe(true);
            expect(result.ids.length).toBe(2);
        });
    });

    describe('unknown action', () => {
        it('should return the previous state', () => {
            const action = {} as Action;

            const result = coreStoreReducer(initialCoreStoreState, action);

            expect(result).toBe(initialCoreStoreState);
        });
    });
});
