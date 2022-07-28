import { ActivatedRoute, PRIMARY_OUTLET, Router } from '@angular/router';

// export function urlWithoutAuxiliaryRoute(router: Router, route: ActivatedRoute): string[] {
//     let _rootChildren = router.createUrlTree([], { relativeTo: route }).root.children[PRIMARY_OUTLET];
//     const _url = ['/' + _rootChildren.toString()];
//     console.log(_rootChildren);
//     while (_rootChildren.hasChildren()) {
//         _rootChildren = _rootChildren.children[PRIMARY_OUTLET];
//         _url.push(_rootChildren.toString());
//     }

//     return _url;
// }

export function urlWithoutAuxiliaryRoute(router: Router, route: ActivatedRoute): void {
    const urlWithoutAuxiliaryRoute = router
        .createUrlTree(['.'], { relativeTo: route })
        .root.children[PRIMARY_OUTLET].toString();
    console.log(urlWithoutAuxiliaryRoute);
    router.navigate([urlWithoutAuxiliaryRoute]);
}

export class RouteWithoutAuxiliary {
    constructor(private router: Router, private route: ActivatedRoute) {
        const urlWithoutAuxiliaryRoute = this.router
            .createUrlTree(['.'], { relativeTo: this.route })
            .root.children[PRIMARY_OUTLET].toString();
        console.log(urlWithoutAuxiliaryRoute);
        this.router.navigate([urlWithoutAuxiliaryRoute]);
    }
}
