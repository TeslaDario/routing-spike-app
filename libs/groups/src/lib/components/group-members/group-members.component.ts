import { Component } from '@angular/core';

@Component({
    selector: 'rapp-group-members',
    template: `
        <rapp-modal>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left>
                        <button mat-icon-button rapp-modal-close color="primary">
                            <mat-icon>arrow_back</mat-icon>
                        </button>
                        <p class="mb-0 ml-4">GROUP MEMBERS</p>
                    </rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div mat-dialog-content>
                            <p>PASSED STATE: {{ data }}</p>
                            <br />
                            <button mat-flat-button rapp-modal-close color="accent">go back</button>
                            <br />
                            <button mat-flat-button rapp-modal-close-all color="primary">CLOSE ALL</button>
                        </div>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal>
    `,
})
export class GroupMembersComponent {
    data = '123';
}
