import { Component } from '@angular/core';

@Component({
    selector: 'rapp-profile',
    template: `
        <div class="dialog-wrapper">
            <div class="backdrop" (click)="onClose()"></div>
            <div class="dialog">Profile Dialog</div>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgb(0, 0, 0, 0.2);
            }
            .dialog {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 80vw;
                height: 80vh;
                color: $light;

                background-color: #fff;
                transform: translate(-50%, -50%);
                border-radius: 20px;
                box-shadow: 0 11px 15px -7px #0003, 0 24px 38px 3px #00000024, 0 9px 46px 8px #0000001f;
            }
        `,
    ],
})
export class ProfileComponent {
    onClose() {
        // this.router.navigate(['../'], { relativeTo: this.route });
        window.history.back();

        // this.router.navigate([{ outlets: { dialog: null } }], {
        //     replaceUrl: false,
        // });
    }
}
