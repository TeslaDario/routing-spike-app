import { Component } from '@angular/core';

@Component({
    selector: 'rapp-groups',
    template: `
        <rapp-combined-view>
            <rapp-group-list></rapp-group-list>
        </rapp-combined-view>
    `,
})
export class GroupsComponent {}
