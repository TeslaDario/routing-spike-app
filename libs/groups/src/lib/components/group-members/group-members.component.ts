import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalComponent } from '@rapp/layout';

@Component({
    selector: 'rapp-group-members',
    template: `
        <rapp-modal>
            <div mat-dialog-title>GROUP MEMBERS</div>

            <div mat-dialog-content>
                <p>PASSED STATE: {{ data }}</p>
                <button mat-flat-button (click)="modal.ref.close('back')" color="accent">go back</button>
            </div>

            <div mat-dialog-actions>
                <button mat-flat-button (click)="modal.ref.close('back')" color="primary">CLOSE</button>
            </div>
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
