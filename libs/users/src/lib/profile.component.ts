import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MOCK_USERS, User } from '@rapp/store';
import { Subscription } from 'rxjs';

@Component({
    selector: 'rapp-profile',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">PROFILE</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div class="flex flex-center">
                            <rapp-avatar size="l" (click)="openMedia()"></rapp-avatar>
                        </div>
                        <br />
                        <small class="flex flex-center">User ID: {{ user?.id }}</small>
                        <div class="flex flex-center">{{ user?.name }}</div>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class ProfileComponent implements OnDestroy {
    user!: User | undefined;
    private sub!: Subscription;

    constructor(private router: Router, private route: ActivatedRoute) {
        console.log('ProfileComponent - constructor');
        this.sub = this.route.params.subscribe((params) => {
            this.user = MOCK_USERS.find((u) => u.id === params['userId']);
        });
    }

    openMedia() {
        this.router.navigate([{ outlets: { media: ['media', 1] } }]);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
