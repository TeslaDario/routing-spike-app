import { createAction, props } from '@ngrx/store';
import { IState } from './store.reducer';

export const setMode = createAction('[LAYOUT Mode] Change values', props<IState>());
export const adjustDetailWidth = createAction('[LAYOUT Mode] Menu toggle', props<{ menuOpened: boolean }>());
