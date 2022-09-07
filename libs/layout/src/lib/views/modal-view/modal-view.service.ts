import { Injectable, OnDestroy } from '@angular/core';
import { ModalViewComponent } from './modal-view.component';

@Injectable({ providedIn: 'root' })
export class ModalViewService implements OnDestroy {
    protected openModals: ModalViewComponent[] = [];

    open(modal: ModalViewComponent): void {
        this.openModals.push(modal);
    }

    /** Helper function to set backdrop background-color and box-shadow only on first modal */
    shouldActivateBackdrop(modal: ModalViewComponent): boolean {
        const index = this.openModals
            .filter((modal) => modal.mode === 'modal' || modal.layoutMode !== 'triple')
            .indexOf(modal);
        return index === 0;
    }

    close(modal: ModalViewComponent): void {
        const index = this.openModals.indexOf(modal);

        if (index > -1) {
            this.openModals.splice(index, 1);
        }

        // fallback to set backdropActive on last modal when other are closed while refresing the page
        if (this.openModals.length === 1) {
            this.openModals[0].backdropActive = true;
        }
    }

    ngOnDestroy(): void {
        this.openModals = [];
    }
}
