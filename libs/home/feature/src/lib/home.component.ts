import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent {
    constructor(private router: Router, private userService: UserService) {}

    openProfile() {
        this.userService.openActor();
    }

    openSettings() {
        this.router.navigate(['home', 'settings']);
    }
}
