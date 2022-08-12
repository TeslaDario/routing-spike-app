import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapp-toolbar-left',
    template: `
        <div class="toolbar-left-wrapper">
            <button *ngIf="icon" mat-icon-button [rappBackButton] color="primary">
                <mat-icon>{{ icon === 'back' ? 'arrow_back' : 'close' }}</mat-icon>
            </button>
            <p class="mb-0 ml-4" *ngIf="title">{{ title }}</p>
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `
            :host {
                flex-shrink: 0;
            }
            .toolbar-left-wrapper {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;
            }
        `,
    ],
})
export class ToolbarLeftComponent {
    @Input() icon!: 'back' | 'close';
    @Input() title!: string;
}
