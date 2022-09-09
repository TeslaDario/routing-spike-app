import { AfterContentInit, Component, HostListener, Input, OnDestroy } from '@angular/core';
import { LayoutMode, StoreFacade } from '@rapp/store';
import { NavigationService } from '../../navigation/navigation.service';
import { modalViewAnimations } from './modal-view.animation';
import { ModalViewService } from './modal-view.service';

type ModalViewMode = 'modal' | 'full' | 'side';
@Component({
    selector: 'rapp-modal-view',
    template: `
        <ng-container
            *ngIf="mode === 'side' && layoutMode === 'triple'; else modalTemp"
            [ngTemplateOutlet]="content"
        ></ng-container>

        <ng-template #modalTemp>
            <div
                class="modal-view-wrapper"
                [ngClass]="{ 'modal-view-full': mode === 'full' || layoutMode === 'single' }"
                @fadeInModal
            >
                <div
                    class="modal-view-backdrop"
                    [ngClass]="{ 'modal-view-backdrop__active': backdropActive }"
                    [rappBackButton]
                ></div>
                <div class="modal-view-content" [@transformModal]="layoutMode === 'single' ? 'modal' : 'full'">
                    <ng-container [ngTemplateOutlet]="content"></ng-container>
                </div>
            </div>
        </ng-template>

        <!-- ONLY ONE ng-content without SELECT attr can exist in the template -->
        <ng-template #content><ng-content></ng-content></ng-template>
    `,
    styles: [
        `
            .modal-view-backdrop__active {
                background-color: rgba(0, 0, 0, 0.2);

                + .modal-view-content {
                    box-shadow: 0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f;
                }
            }
            .modal-view-wrapper {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
                z-index: 999;

                .modal-view-backdrop {
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
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

                    border-radius: 22px;
                    z-index: 2;
                }
                &.modal-view-full .modal-view-content {
                    width: 100vw;
                    max-width: 100vw;
                    height: 100vh;
                    border-radius: 0;
                    box-shadow: none;
                }
            }
        `,
    ],
    animations: modalViewAnimations,
})
export class ModalViewComponent implements AfterContentInit, OnDestroy {
    @Input() mode: ModalViewMode = 'modal';
    backdropActive = false;
    layoutMode!: LayoutMode;

    @HostListener('document:keydown.escape', ['$event']) escapeKeydownHandler() {
        this.navigationService.goBack();
    }

    constructor(
        private storeFacade: StoreFacade,
        private navigationService: NavigationService,
        private modalViewService: ModalViewService
    ) {
        this.modalViewService.open(this);
        this.storeFacade.getMode().subscribe((mode) => (this.layoutMode = mode));
    }

    ngAfterContentInit(): void {
        this.backdropActive = this.modalViewService.shouldActivateBackdrop(this);
    }

    ngOnDestroy(): void {
        this.modalViewService.close(this);
    }
}
