import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-search',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" style="width: 100%;">
                        <rapp-search-input></rapp-search-input>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div class="flex align-center">
                            <rapp-avatar (click)="openProfile()"></rapp-avatar>
                            Some User
                        </div>
                        <br />

                        <rapp-search-results></rapp-search-results>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
})
export class SearchComponent {
    constructor(private router: Router, private userService: UserService) {
        console.log('SearchComponent - constructor');
    }

    openProfile() {
        this.userService.openActor();
    }
}
