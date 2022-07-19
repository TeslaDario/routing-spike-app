import { CoreStoreEntity } from './core-store.models';
import { coreStoreAdapter, CoreStorePartialState, initialCoreStoreState } from './core-store.reducer';
import * as CoreStoreSelectors from './core-store.selectors';

describe('CoreStore Selectors', () => {
    const ERROR_MSG = 'No Error Available';
    const getCoreStoreId = (it: CoreStoreEntity) => it.id;
    const createCoreStoreEntity = (id: string, name = '') =>
        ({
            id,
            name: name || `name-${id}`,
        } as CoreStoreEntity);

    let state: CoreStorePartialState;

    beforeEach(() => {
        state = {
            coreStore: coreStoreAdapter.setAll(
                [
                    createCoreStoreEntity('PRODUCT-AAA'),
                    createCoreStoreEntity('PRODUCT-BBB'),
                    createCoreStoreEntity('PRODUCT-CCC'),
                ],
                {
                    ...initialCoreStoreState,
                    selectedId: 'PRODUCT-BBB',
                    error: ERROR_MSG,
                    loaded: true,
                }
            ),
        };
    });

    describe('CoreStore Selectors', () => {
        it('getAllCoreStore() should return the list of CoreStore', () => {
            const results = CoreStoreSelectors.getAllCoreStore(state);
            const selId = getCoreStoreId(results[1]);

            expect(results.length).toBe(3);
            expect(selId).toBe('PRODUCT-BBB');
        });

        it('getSelected() should return the selected Entity', () => {
            const result = CoreStoreSelectors.getSelected(state) as CoreStoreEntity;
            const selId = getCoreStoreId(result);

            expect(selId).toBe('PRODUCT-BBB');
        });

        it('getCoreStoreLoaded() should return the current "loaded" status', () => {
            const result = CoreStoreSelectors.getCoreStoreLoaded(state);

            expect(result).toBe(true);
        });

        it('getCoreStoreError() should return the current "error" state', () => {
            const result = CoreStoreSelectors.getCoreStoreError(state);

            expect(result).toBe(ERROR_MSG);
        });
    });
});
