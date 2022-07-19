import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CoreStoreActions from './core-store.actions';
import { CoreStoreEffects } from './core-store.effects';
import { CoreStoreFacade } from './core-store.facade';
import { CoreStoreEntity } from './core-store.models';
import { coreStoreReducer, CoreStoreState, CORE_STORE_FEATURE_KEY } from './core-store.reducer';

interface TestSchema {
    coreStore: CoreStoreState;
}

describe('CoreStoreFacade', () => {
    let facade: CoreStoreFacade;
    let store: Store<TestSchema>;
    const createCoreStoreEntity = (id: string, name = ''): CoreStoreEntity => ({
        id,
        name: name || `name-${id}`,
    });

    describe('used in NgModule', () => {
        beforeEach(() => {
            @NgModule({
                imports: [
                    StoreModule.forFeature(CORE_STORE_FEATURE_KEY, coreStoreReducer),
                    EffectsModule.forFeature([CoreStoreEffects]),
                ],
                providers: [CoreStoreFacade],
            })
            class CustomFeatureModule {}

            @NgModule({
                imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule],
            })
            class RootModule {}
            TestBed.configureTestingModule({ imports: [RootModule] });

            store = TestBed.inject(Store);
            facade = TestBed.inject(CoreStoreFacade);
        });

        /**
         * The initially generated facade::loadAll() returns empty array
         */
        it('loadAll() should return empty list with loaded == true', async () => {
            let list = await readFirst(facade.allCoreStore$);
            let isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(0);
            expect(isLoaded).toBe(false);

            facade.init();

            list = await readFirst(facade.allCoreStore$);
            isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(0);
            expect(isLoaded).toBe(true);
        });

        /**
         * Use `loadCoreStoreSuccess` to manually update list
         */
        it('allCoreStore$ should return the loaded list; and loaded flag == true', async () => {
            let list = await readFirst(facade.allCoreStore$);
            let isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(0);
            expect(isLoaded).toBe(false);

            store.dispatch(
                CoreStoreActions.loadCoreStoreSuccess({
                    coreStore: [createCoreStoreEntity('AAA'), createCoreStoreEntity('BBB')],
                })
            );

            list = await readFirst(facade.allCoreStore$);
            isLoaded = await readFirst(facade.loaded$);

            expect(list.length).toBe(2);
            expect(isLoaded).toBe(true);
        });
    });
});
