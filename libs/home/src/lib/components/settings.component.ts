import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
                        <p class="mb-0 ml-4">Settings</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <button mat-button (click)="openSettings2()" color="primary">Go to seetings 2</button>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class SettingsComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;

    constructor(private router: Router) {
        console.log('SettingsComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('SettingsComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('SettingsComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }

    openSettings2() {
        this.router.navigate(['home', { outlets: { dialog: ['settings2'] } }]);
    }
}
