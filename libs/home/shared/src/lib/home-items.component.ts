import { Component } from '@angular/core';

@Component({
    selector: 'rapp-home-items',
    template: `
        <div class="home-item-wrapper">
            <ng-container *ngFor="let item of items">
                <div class="home-item" (click)="openItem()">
                    <p>{{ item }}</p>
                </div>
            </ng-container>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;
            /* :root {
                --home-item-column: 4;
                --home-item-size: min(150px, 23vw);
                --home-item-gap: 20px;
            } */
            .home-item-wrapper {
                display: grid;
                grid-template-columns: repeat(var(--home-item-column), var(--home-item-size));
                grid-gap: var(--home-item-gap);
                justify-content: center;
                padding: var(--home-item-gap);

                .home-item {
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    height: var(--home-item-size);
                    border: 1px solid;
                    border-color: rgba($light, 0.5);
                    border-radius: 20px;
                    cursor: pointer;

                    &:hover {
                        border-color: $light;
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
    items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'];

    openItem(): void {
        window.open('https://www.google.com');
    }

    constructor() {
        document.documentElement.style.setProperty('--home-item-column', '4');
        document.documentElement.style.setProperty('--home-item-size', 'min(150px, 23vw)');
        document.documentElement.style.setProperty('--home-item-gap', '20px');
    }
}
