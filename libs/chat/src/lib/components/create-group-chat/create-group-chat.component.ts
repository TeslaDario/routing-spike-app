import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-create-group-chat',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">CREATE GROUP CHAT</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        CONTENT

                        <br />
                        <button mat-button (click)="closeAll()">Close all</button>
                        <br />
                        <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class CreateGroupChatComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;

    constructor(private dialog: MatDialog, private router: Router) {
        console.log('CreateGroupChatComponent - constructor');
    }

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('CreateGroupChatComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('CreateGroupChatComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }

    closeAll() {
        this.dialog.closeAll();
    }
}
