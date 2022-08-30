import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-create-chat',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="CREATE CHAT"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div>
                            <input type="text" placeholder="State" />
                        </div>

                        <br />
                        <button mat-flat-button (click)="createGroupChat()" color="accent">CREATE GROUP CHAT</button>
                        <br />
                        <button mat-flat-button [rappBackButton] color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
})
export class CreateChatComponent {
    constructor(private router: Router) {
        console.log('CreateChatComponent - constructor');
    }

    createGroupChat() {
        this.router.navigate(['messages', { outlets: { chatGroupCreate: ['create-group-chat'] } }]);
    }
}
