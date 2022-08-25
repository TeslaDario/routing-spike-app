import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MOCK_CHATS, MOCK_TASKS } from '@rapp/store';
import { filter } from 'rxjs';

@Component({
    selector: 'rapp-header-navbar',
    templateUrl: 'header-navbar.component.html',
    styleUrls: ['header-navbar.component.scss'],
})
export class HeaderNavbarComponent {
    activeRoute!: 'messages' | 'tasks' | undefined;
    firstChatId = MOCK_CHATS[0].id;
    firstTaskId = MOCK_TASKS[0].id;

    constructor(private router: Router) {
        this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((event) => {
            if (event.url.startsWith('/messages')) {
                this.activeRoute = 'messages';
            } else if (event.url.startsWith('/tasks')) {
                this.activeRoute = 'tasks';
            } else {
                this.activeRoute = undefined;
            }
        });
    }
}
