import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-create-chat',
    template: `
        <ng-template #dialog>
            <div mat-dialog-title>CREATE CHAT</div>

            <div mat-dialog-content>
                <div>
                    <mat-form-field appearance="outline">
                        <input type="text" placeholder="State" matInput />
                    </mat-form-field>
                </div>
                <button mat-flat-button (click)="createGroupChat()" color="accent">CREATE GROUP CHAT</button>
            </div>

            <div mat-dialog-actions>
                <button mat-flat-button mat-dialog-close="back" color="primary">CLOSE</button>
            </div>
        </ng-template>
    `,
})
export class CreateChatComponent implements AfterViewInit {
    @ViewChild('dialog') template!: TemplateRef<CreateChatComponent>;

    constructor(private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
        console.log('CreateChatComponent - constructor');
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
            console.log('CreateChatComponent - backdrop clicked');
            window.history.back();
        });
        ref.afterClosed().subscribe((result) => {
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
