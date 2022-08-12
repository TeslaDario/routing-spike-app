import { Directive, HostListener, Input } from '@angular/core';
import { NavigationService } from './navigation.service';

@Directive({ selector: '[rappBackButton]' })
export class BackNavigationDirective {
    @Input() rappBackButton: number | undefined = undefined;
    @HostListener('click', ['$event']) onClick() {
        this.navigationService.goBack(this.rappBackButton);
    }

    constructor(private navigationService: NavigationService) {}
}
