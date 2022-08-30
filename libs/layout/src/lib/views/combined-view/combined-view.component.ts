import { Component } from '@angular/core';
import { LayoutMode, StoreFacade } from '@rapp/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'rapp-combined-view',
    template: `
        <div
            class="combined-view"
            [class.combined-view-master__only]="(layoutMode$ | async) === 'single' && !outlet.isActivated"
            [class.combined-view-detail__only]="(layoutMode$ | async) === 'single' && outlet.isActivated"
        >
            <div class="combined-view-master">
                <ng-content></ng-content>
            </div>

            <div class="combined-view-detail" [class.combined-view-detail__active]="outlet.isActivated">
                <router-outlet #outlet="outlet"></router-outlet>
                <div
                    *ngIf="(layoutMode$ | async) !== 'single' && !outlet.isActivated"
                    class="combined-view-detail__empty"
                >
                    Detail not selected!
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .combined-view {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;

                &-master {
                    overflow: scroll;
                    flex: 0 0 var(--master-width);
                }

                &-detail {
                    flex: 0 0 var(--detail-width);
                    overflow: scroll;
                    transition: transform 150ms ease-in-out;
                    z-index: 1;

                    &::before {
                        content: '';
                        width: 1px;
                        background: $ultraLight;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        z-index: 1;
                    }

                    &__empty {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                    }
                }

                &-master__only ::before,
                &-detail__only ::before {
                    content: none;
                }

                &-detail__only .combined-view-detail {
                    transform: translateX(-100vw);
                }
            }
        `,
    ],
})
export class CombinedViewComponent {
    layoutMode$: Observable<LayoutMode> = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}
}
