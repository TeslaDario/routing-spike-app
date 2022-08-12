import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-create-group-chat',
    template: `
        <rapp-modal-page>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="CREATE GROUP CHAT"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        CONTENT

                        <br />
                        <button mat-flat-button [rappBackButton] color="primary">CLOSE</button>
                        <br />
                        <button mat-flat-button [rappBackButton]="2" color="warn">Close all</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal-page>
    `,
})
export class CreateGroupChatComponent {
    constructor(private router: Router) {
        console.log('CreateGroupChatComponent - constructor');
    }
}
