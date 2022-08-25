import { Component, HostListener, Input } from '@angular/core';
import { StoreFacade } from '@rapp/store';
import { NavigationService } from '../navigation/navigation.service';
import { modalPageAnimations } from './modal-page.animation';

@Component({
    selector: 'rapp-modal-page',
    template: `
        <div class="modal-page-wrapper" @fadeInModal>
            <div class="modal-page-backdrop" [rappBackButton]></div>
            <div
                class="modal-page-content"
                [ngClass]="{ 'modal-page-content__full': fullPage || (layoutMode$ | async) === 'single' }"
                [@transformModal]="layoutMode$ | async"
            >
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

                &__full {
                    width: 100vw;
                    max-width: 100vw;
                    height: 100vh;
                    border-radius: 0;
                    box-shadow: none;
                }
            }
        `,
    ],
    animations: modalPageAnimations,
})
export class ModalPageComponent {
    @Input() fullPage = false;
    readonly layoutMode$ = this.storeFacade.getMode();

    @HostListener('document:keydown.escape', ['$event']) escapeKeydownHandler() {
        this.navigationService.goBack();
    }

    constructor(private storeFacade: StoreFacade, private navigationService: NavigationService) {}
}
