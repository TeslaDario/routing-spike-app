import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-group-members',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button (click)="modal.ref.close('back')" color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">GROUP MEMBERS</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div mat-dialog-content>
                            <p>PASSED STATE: {{ data }}</p>
                            <br />
                            <button mat-flat-button (click)="modal.ref.close('back')" color="accent">go back</button>
                            <br />
                            <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
                        </div>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class GroupMembersComponent implements AfterViewInit {
    @ViewChild(ModalComponent) modal!: ModalComponent;
    data = '123';

    ngAfterViewInit() {
        this.modal.ref.backdropClick().subscribe(() => {
            console.log('GroupMembersComponent - backdrop clicked');
            window.history.back();
        });
        this.modal.ref.afterClosed().subscribe((result) => {
            console.log('GroupMembersComponent - close mat dialog', result);
            if (result === 'back') {
                window.history.back();
            }
        });
    }
}
