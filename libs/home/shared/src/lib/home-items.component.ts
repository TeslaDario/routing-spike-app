import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MOCK_CHATS, MOCK_TASKS, StoreFacade } from '@rapp/store';
import { filter } from 'rxjs';

@Component({
    selector: 'rapp-home-items',
    template: `
        <div class="home-item-wrapper">
            <ng-container *ngIf="(layoutMode$ | async) !== 'single'">
                <button mat-button class="home-item" routerLink="/newsfeed" routerLinkActive="mat-primary">
                    <mat-icon>newspaper</mat-icon>
                    <span class="home-item-name">news</span>
                </button>
                <button
                    mat-button
                    class="home-item"
                    [routerLink]="['/messages', firstChatId]"
                    [ngClass]="{ 'mat-primary': activeRoute === 'messages' }"
                >
                    <mat-icon>chat</mat-icon>
                    <span class="home-item-name">chats</span>
                </button>
                <button
                    mat-button
                    class="home-item"
                    [routerLink]="['/tasks', firstTaskId]"
                    [ngClass]="{ 'mat-primary': activeRoute === 'tasks' }"
                >
                    <mat-icon>check_circle_outline</mat-icon>
                    <span class="home-item-name">tasks</span>
                </button>
            </ng-container>

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

                    &.mat-primary {
                        border-color: $primary;
                    }
                }

                @media (max-width: $l) {
                    .home-item-name {
                        display: none !important;
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
    items = [
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5',
        'item 6',
        'item 7',
        'item 8',
        'item 9',
        'item 10',
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5',
        'item 6',
        'item 7',
        'item 8',
        'item 9',
        'item 10',
    ];

    activeRoute!: 'messages' | 'tasks' | undefined;
    firstChatId = MOCK_CHATS[0].id;
    firstTaskId = MOCK_TASKS[0].id;
    readonly layoutMode$ = this.storeFacade.getMode();

    constructor(private router: Router, private storeFacade: StoreFacade) {
        document.documentElement.style.setProperty('--home-item-column', '4');
        document.documentElement.style.setProperty('--home-item-size', 'min(150px, 23vw)');

        this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((event) => {
            if (event.url.startsWith('/messages')) {
                this.activeRoute = 'messages';
            } else if (event.url.startsWith('/tasks')) {
                this.activeRoute = 'tasks';
            } else {
                this.activeRoute = undefined;
            }
        });
    }

    openItem(): void {
        window.open('https://www.google.com');
    }
}
