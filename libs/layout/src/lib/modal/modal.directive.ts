import { Directive, HostListener } from '@angular/core';
import { ModalComponent } from './modal.component';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[rapp-modal-close]' })
export class ModalCloseDirective {
    @HostListener('click', ['$event']) onClick() {
        this.modal.close();
    }

    constructor(private modal: ModalComponent) {}
}

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[rapp-modal-close-all]' })
export class ModalCloseAllDirective {
    @HostListener('click', ['$event']) onClick() {
        this.modal.closeAll();
    }

    constructor(private modal: ModalComponent) {}
}
