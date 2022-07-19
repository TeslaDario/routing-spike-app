import { Component, OnInit } from '@angular/core';
import { CoreStoreFacade } from '@rapp/core/store';

@Component({
    selector: 'rapp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Routing App';

    constructor(private storeFacade: CoreStoreFacade) {}

    ngOnInit() {
        this.storeFacade.init();
    }
}
