import { Component } from '@angular/core';

@Component({
    selector: 'rapp-create-task',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="CREATE TASK"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <button mat-flat-button [rappBackButton] color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class CreateTaskComponent {
    constructor() {
        console.log('CreateTaskComponent - constructor');
    }
}
