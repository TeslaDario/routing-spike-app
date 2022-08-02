import { AfterViewInit, Component, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'rapp-modal',
    template: '<ng-template #modal><ng-content></ng-content></ng-template>',
})
export class ModalComponent implements AfterViewInit {
    @ViewChild('modal') private readonly modal!: TemplateRef<ModalComponent>;
    @Input() full = false;
    public ref!: MatDialogRef<ModalComponent>;

    @HostListener('document:keydown.escape', ['$event']) escapeKeydownHandler() {
        if (this.dialog.openDialogs[this.dialog.openDialogs.length - 1].id === this.ref.id) {
            this.close();
        }
    }

    constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

    ngAfterViewInit() {
        const panelClass = ['rapp-modal'];
        if (this.full) {
            panelClass.push('rapp-modal__full');
        }

        this.ref = this.dialog.open(this.modal, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
            panelClass,
            disableClose: true,
            closeOnNavigation: false,
            id: this.route.snapshot.url[0].path,
        });

        this.ref.backdropClick().subscribe(() => {
            this.close();
        });
    }

    close() {
        this.ref.close();
        window.history.back();
    }

    closeAll() {
        this.dialog.openDialogs.forEach((d) => {
            d.close();
            window.history.back();
        });
    }
}
