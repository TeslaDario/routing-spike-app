import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_CHATS, MOCK_GROUPS, MOCK_POSTS, StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-activities',
    templateUrl: 'activities.component.html',
})
export class ActivitiesComponent {
    layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade, private router: Router) {}

    openChat() {
        this.router.navigate(['messages', MOCK_CHATS[0].id]);
    }
    openPost() {
        this.router.navigate(['groups', MOCK_GROUPS[0].id, 'post', MOCK_POSTS[0].id]);
    }
}
