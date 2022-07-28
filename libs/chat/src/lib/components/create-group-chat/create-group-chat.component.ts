import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-create-group-chat',
    template: `
        <ng-template #dialog>
            <div mat-dialog-title>CREATE GROUP CHAT</div>

            <div mat-dialog-content>
                CONTENT
                <button mat-button (click)="closeAll()">Close all</button>
            </div>

            <div mat-dialog-actions>
                <button mat-flat-button mat-dialog-close="back" color="primary">CLOSE</button>
            </div>
        </ng-template>
    `,
})
export class CreateGroupChatComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<any>;

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        console.log('CreateGroupChatComponent - constructor');
    }

    ngAfterViewInit() {
        const ref = this.dialog.open(this.template, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
            // closeOnNavigation: false,
            // id: this.route.snapshot.url[0].path,
        });

        ref.backdropClick().subscribe(() => {
            console.log('CreateGroupChatComponent - backdrop clicked');
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
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
