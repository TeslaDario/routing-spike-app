import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { DeviceDetectorService } from 'ngx-device-detector';
import { debounceTime, fromEvent, map, merge, startWith } from 'rxjs';
import * as CoreStoreActions from './core-store.actions';

@Injectable()
export class CoreStoreEffects {
    init$ = createEffect(() =>
        merge(fromEvent(window, 'resize'), fromEvent(window, 'orientationchange'))
            .pipe(debounceTime(250))
            .pipe(
                map((event: Event) => (event.target as Window).innerWidth),
                startWith(window.innerWidth),
                map((width) => {
                    if (this.deviceDetector.isMobile() || width < 768) {
                        // document.documentElement.style.setProperty('--page-mode', 'single');
                        // document.documentElement.style.setProperty('--dialog-width', '100vw');
                        // document.documentElement.style.setProperty('--dialog-height', '100vh');
                        return CoreStoreActions.setLayoutSingleMode();
                    } else {
                        // document.documentElement.style.setProperty('--page-mode', 'split');
                        // document.documentElement.style.setProperty('--dialog-width', '90vw');
                        // document.documentElement.style.setProperty('--dialog-height', '90vh');
                        return CoreStoreActions.setLayoutSplitMode();
                    }
                })
            )
    );
    // init$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(CoreStoreActions.initCoreStore),
    //         fetch({
    //             run: (action) => {
    //                 // Your custom service 'load' logic goes here. For now just return a success action...
    //                 return CoreStoreActions.loadCoreStoreSuccess({ coreStore: [] });
    //             },
    //             onError: (action, error) => {
    //                 console.error('Error', error);
    //                 return CoreStoreActions.loadCoreStoreFailure({ error });
    //             },
    //         })
    //     )
    // );

    constructor(private readonly actions$: Actions, private deviceDetector: DeviceDetectorService) {}
}
