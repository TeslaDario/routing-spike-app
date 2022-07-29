import { createAction, props } from '@ngrx/store';
import { IState } from './store.reducer';

export const setMode = createAction('[LAYOUT Mode]', props<IState>());
