import { Component, HostListener, Input } from '@angular/core';
import { StoreFacade } from '@rapp/store';
import { NavigationService } from '../../navigation/navigation.service';
import { modalViewAnimations } from './modal-view.animation';

type ModalViewMode = 'modal' | 'full'; // | 'side';
@Component({
    selector: 'rapp-modal-view',
    template: `
        <!-- 'modal-view-side': mode === 'side' && (layoutMode$ | async) === 'triple', -->
        <div
            class="modal-view-wrapper"
            @fadeInModal
            [ngClass]="{ 'modal-view-full': mode === 'full' || (layoutMode$ | async) === 'single' }"
        >
            <div class="modal-view-backdrop" [rappBackButton]></div>
            <div class="modal-view-content" [@transformModal]="layoutMode$ | async">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            .modal-view-wrapper {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                z-index: 999;
            }
            .modal-view-backdrop {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.2);
                z-index: 1;
            }
            .modal-view-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 90vw;
                height: 80vh;
                max-width: 720px;
                overflow: hidden;

                box-shadow: 0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f;
                border-radius: 22px;
                z-index: 2;
            }

            .modal-view-full .modal-view-content {
                width: 100vw;
                max-width: 100vw;
                height: 100vh;
                border-radius: 0;
                box-shadow: none;
            }
            /* .modal-view-side {
                &.modal-view-wrapper {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                .modal-view-backdrop {
                    width: 100%;
                    height: 100%;
                }
                .modal-view-content {
                    width: 100%;
                    height: 100%;
                    border-radius: 0;
                    box-shadow: none;
                }
            } */
        `,
    ],
    animations: modalViewAnimations,
})
export class ModalViewComponent {
    @Input() mode: ModalViewMode = 'modal';
    readonly layoutMode$ = this.storeFacade.getMode();

    @HostListener('document:keydown.escape', ['$event']) escapeKeydownHandler() {
        this.navigationService.goBack();
    }

    constructor(private storeFacade: StoreFacade, private navigationService: NavigationService) {}
}
