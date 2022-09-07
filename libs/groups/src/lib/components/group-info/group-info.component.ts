import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutMode, MOCK_POSTS, StoreFacade } from '@rapp/store';
import { UserService } from '@rapp/users';

@Component({
    selector: 'rapp-group-info',
    template: `
        <rapp-modal-view mode="side">
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left
                        [icon]="layoutMode === 'triple' ? 'close' : 'back'"
                        title="GROUP INFO"
                    ></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="container">
                        <input type="text" placeholder="State" [(ngModel)]="someData" />

                        <rapp-avatar (click)="openProfile()"></rapp-avatar>

                        <br />
                        <button mat-flat-button (click)="openMembers()" color="accent">Go to members</button>
                        <br />
                        <button mat-flat-button (click)="goToPost()" color="primary">Go to post route</button>
                        <br />
                        <button mat-flat-button [rappBackButton] color="primary">CLOSE</button>
                        
                        <h2>SOME CONTENT FOR SCROLLING</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industryx's standard dummy text ever since the 1500s, when an unknown printer took
                            a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                            PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of classical Latin literature from 45 BC, making
                            it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                            Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                            passage, and going through the cites of the word in classical literature, discovered the
                            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                            is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                            of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem
                            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industryx's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years
                            old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
                            one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
                            ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>

        <router-outlet></router-outlet>
    `,
})
export class GroupInfoComponent {
    someData = '';
    layoutMode!: LayoutMode;

    constructor(private router: Router, private userService: UserService, private storeFacade: StoreFacade) {
        console.log('GroupInfoComponent - constructor');
        this.storeFacade.getMode().subscribe((mode) => (this.layoutMode = mode));
    }

    openProfile() {
        this.userService.openActor();
    }

    openMembers() {
        if (this.layoutMode === 'triple') {
            this.router.navigate(['newsfeed', 'g1', 'members']);
        } else {
            this.router.navigate(['newsfeed', 'g1', 'info', 'members']);
        }
    }

    goToPost() {
        this.router.navigate(['newsfeed', MOCK_POSTS[0].groupId, 'post', MOCK_POSTS[0].id]);
    }
}
