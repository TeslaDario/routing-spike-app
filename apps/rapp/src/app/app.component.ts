import { Component } from '@angular/core';

@Component({
    selector: 'rapp-root',
    template: `
        <div style="position: fixed;left: 50%;z-index: 100000;">
            <small style="color: #ed470a;">v2</small>
        </div>

        <router-outlet></router-outlet>

        <router-outlet name="modal"></router-outlet>
        <router-outlet name="users"></router-outlet>
        <router-outlet name="media"></router-outlet>
    `,
})
export class AppComponent {
    title = 'Routing App v2';

    // constructor(private router: Router, private route: ActivatedRoute) {
    //     this.router.events
    //         .pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationStart))
    //         .subscribe((e) => console.log(e));
    //     const urlWithoutAuxiliaryRoute = this.router
    //         .createUrlTree(['.'], { relativeTo: this.route })
    //         .root.children[PRIMARY_OUTLET].toString();
    //     console.log(urlWithoutAuxiliaryRoute);
    //     this.router.navigate([urlWithoutAuxiliaryRoute]);
    // }
}
