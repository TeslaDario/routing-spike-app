import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MOCK_CHATS, MOCK_TASKS, StoreFacade } from '@rapp/store';
import { filter } from 'rxjs';

@Component({
    selector: 'rapp-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent {
    private _appsOpened = false;
    @Input() set appsOpened(opened) {
        this._appsOpened = opened;
        this.storeFacade.adjustDetailWidth(opened);
    }
    get appsOpened(): boolean {
        return this._appsOpened;
    }
    @Output() appsOpenedChange = new EventEmitter<boolean>();

    activeRoute!: 'messages' | 'tasks' | undefined;
    firstChatId = MOCK_CHATS[0].id;
    firstTaskId = MOCK_TASKS[0].id;
    readonly detailWidth$ = this.storeFacade.getDetailWidth();

    constructor(private storeFacade: StoreFacade, private router: Router) {
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

    toggleApps(opened: boolean) {
        this.appsOpenedChange.emit(opened);
    }
}
