import { Component } from '@angular/core';

@Component({
    selector: 'rapp-search-input',
    template: `<input type="search" placeholder="Search" style="width: 100%;" />`,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            :host {
                display: block;
                width: 100%;
                padding: 5px 10px;
                border-radius: 25px;
                background-color: rgba($light, 0.25);

                input {
                    width: 100%;
                    border: none;
                    outline: none;
                    background-color: transparent;
                }
            }
        `,
    ],
})
export class SearchInputComponent {}
