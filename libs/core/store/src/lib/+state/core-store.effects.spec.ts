import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as CoreStoreActions from './core-store.actions';
import { CoreStoreEffects } from './core-store.effects';

describe('CoreStoreEffects', () => {
    let actions: Observable<Action>;
    let effects: CoreStoreEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NxModule.forRoot()],
            providers: [CoreStoreEffects, provideMockActions(() => actions), provideMockStore()],
        });

        effects = TestBed.inject(CoreStoreEffects);
    });

    describe('init$', () => {
        it('should work', () => {
            actions = hot('-a-|', { a: CoreStoreActions.initCoreStore() });

            const expected = hot('-a-|', { a: CoreStoreActions.loadCoreStoreSuccess({ coreStore: [] }) });

            expect(effects.init$).toBeObservable(expected);
        });
    });
});
