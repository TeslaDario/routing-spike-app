import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-create-group-chat',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">CREATE GROUP CHAT</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        CONTENT

                        <br />
                        <button mat-flat-button rapp-modal-close-all color="warn">Close all</button>
                        <br />
                        <button mat-flat-button rapp-modal-close color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class CreateGroupChatComponent {
    constructor(private router: Router) {
        console.log('CreateGroupChatComponent - constructor');
    }
}
