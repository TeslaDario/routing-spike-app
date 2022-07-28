import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class DialogService {
    constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

    open<DialogComponent = unknown>(
        modalComponent: ComponentType<DialogComponent> | TemplateRef<DialogComponent>
    ): MatDialogRef<DialogComponent> {
        console.log(this.route);
        const ref = this.dialog.open(modalComponent, {
            width: '90vw',
            maxWidth: '90vw',
            height: '80vh',
            closeOnNavigation: false,
            // id: this.route.url[0].path
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

        return ref;
    }
}
