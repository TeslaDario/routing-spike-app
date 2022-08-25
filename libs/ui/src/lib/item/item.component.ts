import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapp-item',
    template: `
        <div class="item" matRipple>
            <div>
                <mat-icon class="item-icon__left" color="primary">{{ leftIcon }}</mat-icon>
                <strong>{{ text }}</strong>
            </div>
            <mat-icon color="primary">{{ rightIcon }}</mat-icon>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px;

                > div {
                    display: flex;
                    align-items: center;
                }
                strong {
                    margin-left: 10px;
                }
            }
            .item-icon__left {
                background-color: rgba($light, 0.2);
                border-radius: 50%;
                padding: 5px;
            }
        `,
    ],
})
export class ItemComponent {
    @Input() leftIcon!: string;
    @Input() text!: string;
    @Input() rightIcon!: string;
}
