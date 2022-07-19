import { Action, createReducer, on } from '@ngrx/store';

import * as CoreStoreActions from './core-store.actions';

export const CORE_STORE_FEATURE_KEY = 'coreStore';

export interface ICoreState {
    layoutMode: 'single' | 'split';
}
// export interface CoreStoreState extends EntityState<ICoreState> {
//     layoutMode: 'single' | 'split';
// }

export interface CoreStorePartialState {
    readonly [CORE_STORE_FEATURE_KEY]: ICoreState;
}

// export const coreStoreAdapter: EntityAdapter<ICoreState> = createEntityAdapter<ICoreState>();

export const initialCoreStoreState: ICoreState = {
    // set initial required properties
    layoutMode: 'single',
};

const reducer = createReducer(
    initialCoreStoreState,
    on(CoreStoreActions.setLayoutSingleMode, (state) => ({ ...state, layoutMode: 'single' })),
    on(CoreStoreActions.setLayoutSplitMode, (state) => ({ ...state, layoutMode: 'split' }))
    // on(CoreStoreActions.loadCoreStoreSuccess, (state, { coreStore }) =>
    //     coreStoreAdapter.setAll(coreStore, { ...state, loaded: true })
    // )
);

export function coreStoreReducer(state: ICoreState | undefined, action: Action) {
    return reducer(state, action);
}
