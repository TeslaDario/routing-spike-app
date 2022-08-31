import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapp-floating-action-button',
    template: `
        <div class="floating-wrapper" [ngClass]="{ 'floating-wrapper__drawer-opened': drawerOpened }">
            <button mat-raised-button color="primary">
                <mat-icon>add</mat-icon>
                <span>{{ text }}</span>
            </button>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .floating-wrapper {
                position: fixed;
                right: 20px;
                bottom: 20px;
                z-index: 1;
                transition: 150ms right cubic-bezier(0, 0, 0.2, 1);

                &__drawer-opened {
                    right: calc(var(--master-width) + 20px);
                }
            }

            @media (max-width: $m) {
                .floating-wrapper {
                    bottom: calc($bottomNavbarHeight + 20px);
                }
            }
        `,
    ],
})
export class FloatingActionButtonComponent {
    @Input() text!: string;
    @Input() drawerOpened!: boolean;
}
