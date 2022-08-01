import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-groups',
    templateUrl: 'groups.component.html',
})
export class GroupsComponent {
    constructor(private router: Router) {}

    openGroupInfo() {
        this.router.navigate(['groups', { outlets: { dialog: ['info'] } }]);
    }

    openGroupMembers() {
        this.router.navigate(['groups', { outlets: { dialog: ['members'] } }]);
    }
}
