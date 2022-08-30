import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DeviceDetectorService } from 'ngx-device-detector';
import { debounceTime, fromEvent, map, merge, startWith } from 'rxjs';
import * as StoreActions from './store.actions';
import { IState } from './store.reducer';

@Injectable()
export class StoreEffects {
    init$ = createEffect(() =>
        merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange'))
            .pipe(debounceTime(250))
            .pipe(
                map((event: Event) => (event.target as Window).innerWidth),
                startWith(window.innerWidth),
                map((width) => {
                    const mode: IState['mode'] =
                        this.deviceDetector.isMobile() || width <= 768 ? 'single' : width <= 1200 ? 'double' : 'triple';
                    let masterWidth = width,
                        detailWidth = width;

                    if (mode !== 'single') {
                        masterWidth = 320;
                        detailWidth = width - masterWidth;
                    }

                    document.body.dataset['mode'] = mode;
                    document.documentElement.style.setProperty('--master-width', `${masterWidth}px`);
                    document.documentElement.style.setProperty('--detail-width', `${detailWidth}px`);
                    return StoreActions.setMode({ mode, masterWidth, detailWidth });
                })
            )
    );

    constructor(private deviceDetector: DeviceDetectorService) {}
}
