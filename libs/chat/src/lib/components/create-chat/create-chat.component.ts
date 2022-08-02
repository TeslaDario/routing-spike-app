import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-create-chat',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
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
                        <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class CreateChatComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;

    constructor(private router: Router) {
        console.log('CreateChatComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('CreateChatComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('CreateChatComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }

    createGroupChat() {
        this.router.navigate(['messages', { outlets: { dialog: ['create-group-chat'] } }]);
    }
}
