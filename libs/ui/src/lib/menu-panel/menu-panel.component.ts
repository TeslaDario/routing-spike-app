import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
    selector: 'rapp-menu-panel',
    exportAs: 'menuPanel',
    template: `
        <mat-menu class="header-menu-panel" backdropClass="header-menu-panel-backdrop">
            <div class="header-menu-panel__header">
                <button mat-icon-button color="primary">
                    <mat-icon>close</mat-icon>
                </button>
                <h2 *ngIf="!hasSearch">{{ title }}</h2>
                <rapp-search-input *ngIf="hasSearch" (click)="$event.stopPropagation()"></rapp-search-input>
            </div>
            <div class="header-menu-panel__content">
                <ng-content></ng-content>
            </div>
        </mat-menu>
    `,
})
export class MenuPanelComponent extends MatMenu {
    @ViewChild(MatMenu, { static: true }) menu!: MatMenu;
    @Input() title!: string;
    @Input() hasSearch = false;
}
