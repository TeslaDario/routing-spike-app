import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rapp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Routing App';

    constructor(private router: Router, private route: ActivatedRoute) {
        // this.router.events
        //     .pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationStart))
        //     .subscribe((e) => console.log(e));
        // const urlWithoutAuxiliaryRoute = this.router
        //     .createUrlTree(['.'], { relativeTo: this.route })
        //     .root.children[PRIMARY_OUTLET].toString();
        // console.log(urlWithoutAuxiliaryRoute);
        // this.router.navigate([urlWithoutAuxiliaryRoute]);
    }
}
