import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-create-chat',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">CREATE CHAT</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div>
                            <mat-form-field appearance="outline">
                                <input type="text" placeholder="State" matInput />
                            </mat-form-field>
                        </div>

                        <br />
                        <button mat-flat-button (click)="createGroupChat()" color="accent">CREATE GROUP CHAT</button>
                        <br />
                        <button mat-flat-button rapp-modal-close color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class CreateChatComponent {
    constructor(private router: Router, private route: ActivatedRoute) {
        console.log('CreateChatComponent - constructor');
    }

    createGroupChat() {
        this.router.navigate(['messages', { outlets: { groupChat: ['create-group-chat'] } }]);
    }
}
