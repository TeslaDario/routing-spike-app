import { Component } from '@angular/core';
import { Group, MOCK_GROUPS } from '@rapp/shared';

@Component({
    selector: 'rapp-group-list',
    templateUrl: 'group-list.component.html',
    styleUrls: ['group-list.component.scss'],
})
export class GroupListComponent {
    groups: Group[] = MOCK_GROUPS;
}
