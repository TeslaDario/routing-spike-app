import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CORE_STORE_FEATURE_KEY, ICoreState } from './core-store.reducer';

export const getCoreStoreState = createFeatureSelector<ICoreState>(CORE_STORE_FEATURE_KEY);

export const getLayoutMode = createSelector(getCoreStoreState, (state: ICoreState) => state.layoutMode);
