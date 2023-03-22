import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState, STORE_FEATURE_KEY } from './store.reducer';

export const getStoreState = createFeatureSelector<IState>(STORE_FEATURE_KEY);

export const getState = createSelector(getStoreState, (state) => state);
export const getMode = createSelector(getStoreState, ({ mode }) => mode);
export const getMasterWidth = createSelector(getStoreState, ({ masterWidth }) => masterWidth);
export const getDetailWidth = createSelector(getStoreState, ({ detailWidth }) => detailWidth);
