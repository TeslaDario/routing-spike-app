import { Component } from '@angular/core';

@Component({
    selector: 'rapp-group-members',
    template: `
        <rapp-modal-view>
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="GROUP CHAT MEMBERS"></rapp-toolbar-left>
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
            </rapp-view>
        </rapp-modal-view>
    `,
})
export class GroupChatMembersComponent {
    data = '123';
}
