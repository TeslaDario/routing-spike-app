import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-create-post',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
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
export class CreatePostComponent {
    constructor(private router: Router) {
        console.log('CreatePostComponent - constructor');
    }
}
