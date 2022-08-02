import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-search',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">Search</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">Search</div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class SearchComponent {
    constructor(private router: Router) {
        console.log('SearchComponent - constructor');
    }
}
