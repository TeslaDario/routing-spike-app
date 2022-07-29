import { Action, createReducer, on } from '@ngrx/store';
import * as CoreStoreActions from './core-store.actions';

export const CORE_STORE_FEATURE_KEY = 'coreStore';

export interface ICoreState {
    layoutMode: 'single' | 'split';
}
export interface CoreStorePartialState {
    readonly [CORE_STORE_FEATURE_KEY]: ICoreState;
}

export const initialCoreStoreState: ICoreState = {
    layoutMode: 'single',
};

const reducer = createReducer(
    initialCoreStoreState,
    on(CoreStoreActions.setLayoutMode, (state, { mode }) => ({ ...state, layoutMode: mode }))
);

export function coreStoreReducer(state: ICoreState | undefined, action: Action) {
    return reducer(state, action);
}
