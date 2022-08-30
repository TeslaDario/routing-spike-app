import { Component, HostListener, Input } from '@angular/core';
import { StoreFacade } from '@rapp/store';
import { NavigationService } from '../navigation/navigation.service';
import { modalPageAnimations } from './modal-page.animation';

type ModalPageMode = 'modal' | 'full'; // | 'side';
@Component({
    selector: 'rapp-modal-page',
    template: `
        <!-- 'modal-page-side': mode === 'side' && (layoutMode$ | async) === 'triple', -->
        <div
            class="modal-page-wrapper"
            @fadeInModal
            [ngClass]="{
                'modal-page-full': mode === 'full' || (layoutMode$ | async) === 'single'
            }"
        >
            <div class="modal-page-backdrop" [rappBackButton]></div>
            <div class="modal-page-content" [@transformModal]="layoutMode$ | async">
                <ng-content select="rapp-page"></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            .modal-page-wrapper {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                z-index: 999;
            }
            .modal-page-backdrop {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.2);
                z-index: 1;
            }
            .modal-page-content {
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

            .modal-page-full .modal-page-content {
                width: 100vw;
                max-width: 100vw;
                height: 100vh;
                border-radius: 0;
                box-shadow: none;
            }
            /* .modal-page-side {
                &.modal-page-wrapper {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                .modal-page-backdrop {
                    width: 100%;
                    height: 100%;
                }
                .modal-page-content {
                    width: 100%;
                    height: 100%;
                    border-radius: 0;
                    box-shadow: none;
                }
            } */
        `,
    ],
    animations: modalPageAnimations,
})
export class ModalPageComponent {
    @Input() mode: ModalPageMode = 'modal';
    readonly layoutMode$ = this.storeFacade.getMode();

    @HostListener('document:keydown.escape', ['$event']) escapeKeydownHandler() {
        this.navigationService.goBack();
    }

    constructor(private storeFacade: StoreFacade, private navigationService: NavigationService) {}
}
