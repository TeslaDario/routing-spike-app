import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'rapp-modal',
    template: '<ng-template #modal><ng-content></ng-content></ng-template>',
})
export class ModalComponent implements AfterViewInit {
    @ViewChild('modal') private readonly modal!: TemplateRef<ModalComponent>;
    public ref!: MatDialogRef<ModalComponent>;

    constructor(private dialog: MatDialog, private route: ActivatedRoute) {
        console.log('ModalComponent - constructor', this.route.snapshot.url[0].path);
    }

    ngAfterViewInit() {
        this.ref = this.dialog.open(this.modal, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
            panelClass: 'rapp-modal',
            disableClose: true,
            closeOnNavigation: false,
            id: this.route.snapshot.url[0].path,
        });
    }

    public closeAll() {
        this.dialog.closeAll();
    }
}
