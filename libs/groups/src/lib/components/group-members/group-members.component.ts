import { Component } from '@angular/core';

@Component({
    selector: 'rapp-group-members',
    template: `
        <rapp-modal-page>
            <rapp-page>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="GROUP MEMBERS"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <div mat-dialog-content>
                            <p>PASSED STATE: {{ data }}</p>
                            <br />
                            <button mat-flat-button [rappBackButton] color="accent">go back</button>
                            <br />
                            <button mat-flat-button [rappBackButton]="2" color="primary">CLOSE ALL</button>
                        </div>
                    </div>
                </rapp-content>
            </rapp-page>
        </rapp-modal-page>
    `,
})
export class GroupMembersComponent {
    data = '123';
}
