import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@rapp/store';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private router: Router) {}

    openActor(): void {
        this.router.navigate([{ outlets: { users: ['users', 'me'] } }]);
    }

    openProfile(id: User['id']): void {
        this.router.navigate([{ outlets: { users: ['users', id] } }]);
    }
}
