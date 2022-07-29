import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { DeviceDetectorService } from 'ngx-device-detector';
import { debounceTime, fromEvent, map, merge, startWith } from 'rxjs';
import * as CoreStoreActions from './core-store.actions';
import { ICoreState } from './core-store.reducer';

@Injectable()
export class CoreStoreEffects {
    init$ = createEffect(() =>
        merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange'))
            .pipe(debounceTime(250))
            .pipe(
                map((event: Event) => (event.target as Window).innerWidth),
                startWith(window.innerWidth),
                map((width) => {
                    const mode: ICoreState['layoutMode'] =
                        this.deviceDetector.isMobile() || width < 768 ? 'single' : 'split';

                    CoreStoreEffects.setMode(document.body, mode);
                    return CoreStoreActions.setLayoutMode({ mode });
                })
            )
    );

    static setMode(el: HTMLElement, mode: ICoreState['layoutMode']) {
        el.dataset['mode'] = mode;
    }

    constructor(private deviceDetector: DeviceDetectorService) {}
}
