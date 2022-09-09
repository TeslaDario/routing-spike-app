import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rapp-search-results',
    template: `
        <ng-container *ngFor="let i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]">
            <button mat-flat-button (click)="replaceToPost()" color="primary">Go to post route (replace state)</button>
            <br />
            <br />
            <button mat-flat-button (click)="goToPost()" color="primary">Go to post route (push state)</button>
            <br />
            <br />
        </ng-container>
    `,
})
export class SearchResultsComponent {
    constructor(private router: Router) {}

    replaceToPost() {
        // Navigation from modal should use replaceUrl
        // if we dont wont to track going back to that modal with back button
        this.router.navigate(['newsfeed', 'g1', 'post', 'p1'], { replaceUrl: true });
    }

    goToPost() {
        this.router.navigate(['newsfeed', 'g1', 'post', 'p1']);
    }
}
