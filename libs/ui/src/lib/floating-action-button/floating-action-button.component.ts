import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapp-floating-action-button',
    template: `
        <div class="add-post">
            <button mat-raised-button color="primary">
                <mat-icon>add</mat-icon>
                <span>{{ text }}</span>
            </button>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .add-post {
                position: fixed;
                right: 20px;
                bottom: 20px;
                z-index: 1;
            }

            @media (max-width: $m) {
                .add-post {
                    bottom: calc($bottomNavbarHeight + 20px);
                }
            }
        `,
    ],
})
export class FloatingActionButtonComponent {
    @Input() text!: string;
}
