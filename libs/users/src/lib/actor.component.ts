import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-actor',
    template: `
        <rapp-modal>
            <!-- <ng-template #dialog> -->
            <div mat-dialog-title>
                <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                    <mat-icon>arrow_back</mat-icon>
                </button>
                MY PROFILE
            </div>

            <div mat-dialog-content>
                <div class="flex flex-center">
                    <rapp-avatar size="l" (click)="openMedia()"></rapp-avatar>
                </div>
            </div>

            <div mat-dialog-actions class="flex flex-center">NAME SURNAME</div>
            <!-- </ng-template> -->
        </rapp-modal>
    `,
})
export class ActorComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;

    constructor(private router: Router) {
        console.log('ActorComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('ActorComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('ActorComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }

    openMedia() {
        this.router.navigate([{ outlets: { media: ['media', 1] } }]);
    }
}
