import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-actor',
    template: `
        <rapp-modal-page>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="MY PROFILE"></rapp-toolbar-left>
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
        </rapp-modal-page>
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
