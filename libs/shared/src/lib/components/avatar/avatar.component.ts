import { Component, Input } from '@angular/core';

@Component({
    selector: 'rapp-avatar',
    template: `
        <div matRipple class="avatar" [ngClass]="'avatar-' + size">
            <img src="assets/icons/icon-72x72.png" />
        </div>
    `,
    styles: [
        `
            .avatar {
                border-radius: 50%;
                border: 1px solid rgba(142, 142, 147, 0.1);
                cursor: pointer;

                &-m {
                    height: 48px;
                    width: 48px;
                }
                &-s {
                    height: 40px;
                    width: 40px;
                }
                &-l {
                    height: 120px;
                    width: 120px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    border-radius: inherit;
                    border: inherit;
                }
            }
        `,
    ],
})
export class AvatarComponent {
    @Input() size: 's' | 'm' | 'l' = 'm';
}
