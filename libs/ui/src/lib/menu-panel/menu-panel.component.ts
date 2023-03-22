import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
    selector: 'rapp-menu-panel',
    exportAs: 'menuPanel',
    template: `
        <mat-menu class="header-menu-panel" [backdropClass]="backdropClass">
            <div class="header-menu-panel__header" *ngIf="title">
                <button mat-icon-button color="primary">
                    <mat-icon>close</mat-icon>
                </button>
                <h2>{{ title }}</h2>
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
    @Input() override backdropClass = 'header-menu-panel-backdrop';
}
