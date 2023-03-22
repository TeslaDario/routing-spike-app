import { Component } from '@angular/core';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-home-items',
    template: `
        <div class="home-item-wrapper">
            <ng-container *ngFor="let item of items">
                <button mat-button class="home-item" (click)="openItem()">
                    <mat-icon>add_to_home_screen</mat-icon>
                    <span class="home-item-name">{{ item }}</span>
                </button>
            </ng-container>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .home-item-wrapper {
                display: grid;
                grid-template-columns: repeat(var(--home-item-column), var(--home-item-size));
                grid-gap: 15px;
                justify-content: center;
                padding: 10px;

                .home-item {
                    height: var(--home-item-size);
                    border: 1px solid;
                    border-color: rgba($light, 0.5);
                    border-radius: 12px;
                    padding: 0;
                    min-width: 40px;

                    &:hover {
                        border-color: $light;
                    }

                    .home-item-name {
                        display: block;
                        text-transform: capitalize;
                    }
                }

                @media (max-width: $m) {
                    --home-item-column: 3;
                    --home-item-size: min(150px, 30vw);
                }

                @media (max-width: $s) {
                    --home-item-column: 2;
                    --home-item-size: min(150px, 45vw);
                }
            }
        `,
    ],
})
export class HomeItemsComponent {
    items = Array.from({ length: 20 }, (_, i) => `item ${i + 1}`);

    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {
        document.documentElement.style.setProperty('--home-item-column', '4');
        document.documentElement.style.setProperty('--home-item-size', 'min(150px, 23vw)');
    }

    openItem(): void {
        window.open('https://www.google.com');
    }
}
