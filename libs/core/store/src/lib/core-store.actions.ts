import { createAction, props } from '@ngrx/store';
import { ICoreState } from './core-store.reducer';

export const setLayoutMode = createAction('[LAYOUT Mode]', props<{ mode: ICoreState['layoutMode'] }>());
