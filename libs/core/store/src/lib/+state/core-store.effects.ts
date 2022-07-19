import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CoreStoreActions from './core-store.actions';

@Injectable()
export class CoreStoreEffects {
    init$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoreStoreActions.initCoreStore),
            fetch({
                run: (action) => {
                    // Your custom service 'load' logic goes here. For now just return a success action...
                    return CoreStoreActions.loadCoreStoreSuccess({ coreStore: [] });
                },
                onError: (action, error) => {
                    console.error('Error', error);
                    return CoreStoreActions.loadCoreStoreFailure({ error });
                },
            })
        )
    );

    constructor(private readonly actions$: Actions) {}
}
