import { createAction, props } from '@ngrx/store';
import { CoreStoreEntity } from './core-store.models';

export const initCoreStore = createAction('[CoreStore Page] Init');

export const loadCoreStoreSuccess = createAction(
    '[CoreStore/API] Load CoreStore Success',
    props<{ coreStore: CoreStoreEntity[] }>()
);

export const loadCoreStoreFailure = createAction('[CoreStore/API] Load CoreStore Failure', props<{ error: any }>());
