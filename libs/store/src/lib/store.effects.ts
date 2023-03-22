import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DeviceDetectorService } from 'ngx-device-detector';
import { debounceTime, fromEvent, map, merge, mergeMap, startWith, withLatestFrom } from 'rxjs';
import * as StoreActions from './store.actions';
import { StoreFacade } from './store.facade';
import { LayoutMode } from './store.reducer';
import { getState } from './store.selectors';

const MASTER_WIDTH = 320;
const DOUBLE_BREAKPOINT = 768;

@Injectable()
export class StoreEffects {
    init$ = createEffect(() =>
        merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange')).pipe(
            debounceTime(250),
            map((event: Event) => (event.target as Window).innerWidth),
            startWith(window.innerWidth),
            map((width) => {
                const mode: LayoutMode =
                    this.deviceDetector.isMobile() || width <= DOUBLE_BREAKPOINT
                        ? 'single'
                        : width <= MASTER_WIDTH + DOUBLE_BREAKPOINT
                        ? 'double'
                        : 'triple';
                let masterWidth = width,
                    detailWidth = width;

                if (mode !== 'single') {
                    masterWidth = MASTER_WIDTH;
                    detailWidth = width - masterWidth - 50;
                }

                document.body.dataset['mode'] = mode;
                document.documentElement.style.setProperty('--master-width', `${masterWidth}px`);
                document.documentElement.style.setProperty('--detail-width', `${detailWidth}px`);
                return StoreActions.setMode({ mode, masterWidth, detailWidth });
            })
        )
    );

    adjustDetailWidth$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.adjustDetailWidth),
            withLatestFrom(this.store.select(getState)),
            mergeMap(async ([action, state]) => {
                const detailWidth = action.menuOpened
                    ? window.innerWidth - state.masterWidth - 50 - (state.masterWidth - 50)
                    : window.innerWidth - state.masterWidth - 50;
                document.documentElement.style.setProperty('--detail-width', `${detailWidth}px`);
                return StoreActions.setMode({ mode: state.mode, masterWidth: state.masterWidth, detailWidth });
            })
        )
    );

    constructor(
        private readonly store: Store,
        private actions$: Actions,
        private storeFacade: StoreFacade,
        private deviceDetector: DeviceDetectorService
    ) {}
}
