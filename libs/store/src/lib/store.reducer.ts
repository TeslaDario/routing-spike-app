import { Action, createReducer, on } from '@ngrx/store';
import * as StoreActions from './store.actions';

export const STORE_FEATURE_KEY = 'store';

export interface IState {
    mode: 'single' | 'double' | 'triple';
    masterWidth: number;
    detailWidth: number;
}
export interface StorePartialState {
    readonly [STORE_FEATURE_KEY]: IState;
}

export const initialCoreStoreState: IState = {
    mode: 'single',
    masterWidth: window.innerWidth,
    detailWidth: window.innerWidth,
};

const reducer = createReducer(
    initialCoreStoreState,
    on(StoreActions.setMode, (state, newState) => ({ ...state, ...newState }))
);

export function storeReducer(state: IState | undefined, action: Action) {
    return reducer(state, action);
}
