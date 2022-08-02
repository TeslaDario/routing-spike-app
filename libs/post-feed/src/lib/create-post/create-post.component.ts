import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-create-post',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">Create post</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">Create post</div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class CreatePostComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;

    constructor(private router: Router) {
        console.log('CreatePostComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('CreatePostComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('CreatePostComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }
}
