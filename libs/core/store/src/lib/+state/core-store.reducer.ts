import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as CoreStoreActions from './core-store.actions';
import { CoreStoreEntity } from './core-store.models';

export const CORE_STORE_FEATURE_KEY = 'coreStore';

export interface CoreStoreState extends EntityState<CoreStoreEntity> {
    selectedId?: string | number; // which CoreStore record has been selected
    loaded: boolean; // has the CoreStore list been loaded
    error?: string | null; // last known error (if any)
}

export interface CoreStorePartialState {
    readonly [CORE_STORE_FEATURE_KEY]: CoreStoreState;
}

export const coreStoreAdapter: EntityAdapter<CoreStoreEntity> = createEntityAdapter<CoreStoreEntity>();

export const initialCoreStoreState: CoreStoreState = coreStoreAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});

const reducer = createReducer(
    initialCoreStoreState,
    on(CoreStoreActions.initCoreStore, (state) => ({ ...state, loaded: false, error: null })),
    on(CoreStoreActions.loadCoreStoreSuccess, (state, { coreStore }) =>
        coreStoreAdapter.setAll(coreStore, { ...state, loaded: true })
    ),
    on(CoreStoreActions.loadCoreStoreFailure, (state, { error }) => ({ ...state, error }))
);

export function coreStoreReducer(state: CoreStoreState | undefined, action: Action) {
    return reducer(state, action);
}
