import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-settings',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">Settings 2</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content> </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class Settings2Component implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;

    constructor() {
        console.log('Settings2Component - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('Settings2Component - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('Settings2Component - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }
}
