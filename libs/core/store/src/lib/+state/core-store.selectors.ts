import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coreStoreAdapter, CoreStoreState, CORE_STORE_FEATURE_KEY } from './core-store.reducer';

// Lookup the 'CoreStore' feature state managed by NgRx
export const getCoreStoreState = createFeatureSelector<CoreStoreState>(CORE_STORE_FEATURE_KEY);

const { selectAll, selectEntities } = coreStoreAdapter.getSelectors();

export const getCoreStoreLoaded = createSelector(getCoreStoreState, (state: CoreStoreState) => state.loaded);

export const getCoreStoreError = createSelector(getCoreStoreState, (state: CoreStoreState) => state.error);

export const getAllCoreStore = createSelector(getCoreStoreState, (state: CoreStoreState) => selectAll(state));

export const getCoreStoreEntities = createSelector(getCoreStoreState, (state: CoreStoreState) => selectEntities(state));

export const getSelectedId = createSelector(getCoreStoreState, (state: CoreStoreState) => state.selectedId);

export const getSelected = createSelector(getCoreStoreEntities, getSelectedId, (entities, selectedId) =>
    selectedId ? entities[selectedId] : undefined
);
