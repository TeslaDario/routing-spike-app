import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState, STORE_FEATURE_KEY } from './store.reducer';

export const getCoreStoreState = createFeatureSelector<IState>(STORE_FEATURE_KEY);

export const getMode = createSelector(getCoreStoreState, ({ mode }) => mode);
export const getMasterWidth = createSelector(getCoreStoreState, ({ masterWidth }) => masterWidth);
export const getDetailWidth = createSelector(getCoreStoreState, ({ detailWidth }) => detailWidth);
