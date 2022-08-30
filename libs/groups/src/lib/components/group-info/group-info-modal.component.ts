import { Component } from '@angular/core';

@Component({
    selector: 'rapp-group-info-modal',
    template: `
        <rapp-modal-view>
            <rapp-group-info></rapp-group-info>
        </rapp-modal-view>
        <router-outlet></router-outlet>
    `,
})
export class GroupInfoModalComponent {}
