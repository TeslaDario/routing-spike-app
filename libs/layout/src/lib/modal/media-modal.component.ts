import { Component } from '@angular/core';

@Component({
    selector: 'rapp-media-modal',
    template: `
        <rapp-modal [full]="true">
            <rapp-page [dark]="true">
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">Back</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="media-wrapper">
                        <img src="assets/icons/icon-72x72.png" class="media" />
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
    styles: [
        `
            .media-wrapper {
                height: 100%;
            }
            .media {
                display: block;
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        `,
    ],
})
export class MediaDialogComponent {
    constructor() {
        console.log('MediaDialogComponent - constructor');
    }
}
