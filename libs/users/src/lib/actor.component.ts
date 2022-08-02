import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-actor',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">MY PROFILE</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div class="flex flex-center">
                            <rapp-avatar size="l" (click)="openMedia()"></rapp-avatar>
                        </div>
                        <br />
                        <div class="flex flex-center">NAME SURNAME</div>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class ActorComponent {
    constructor(private router: Router) {
        console.log('ActorComponent - constructor');
    }

    openMedia() {
        this.router.navigate([{ outlets: { media: ['media', 1] } }]);
    }
}
