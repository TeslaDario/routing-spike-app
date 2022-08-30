import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_GROUPS, MOCK_POSTS, StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-newsfeed-aside',
    template: `
        <div class="newsfeed-aside-wrapper">
            <!-- [style.width.px]="masterWidth$ | async"> -->
            <div class="item-wrapper m-10">
                <rapp-item
                    leftIcon="access_time"
                    text="Scheduled posts"
                    rightIcon="chevron_right"
                    (click)="openScheduledPost()"
                ></rapp-item>
            </div>

            <div class="item-wrapper m-10">
                <rapp-item leftIcon="post_add" text="New post" rightIcon="add" (click)="newPost()"></rapp-item>
                <rapp-item
                    leftIcon="check_circle_outline"
                    text="New task"
                    rightIcon="add"
                    (click)="newTask()"
                ></rapp-item>
                <rapp-item leftIcon="groups" text="New group chat" rightIcon="add" (click)="newGroupChat()"></rapp-item>
            </div>

            <div class="item-wrapper activities-wrapper m-10">
                <h2>ActivitiesFeature</h2>
                <div
                    *ngFor="let activity of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    class="activity-item"
                    matRipple
                    (click)="openActivity(activity)"
                >
                    ActivitiesFeature {{ activity }}
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            @use 'apps/rapp/src/assets/styles' as *;

            .newsfeed-aside-wrapper {
                padding: 10px 0;

                .activities-wrapper {
                    padding: 10px;
                    max-height: 300px;
                    overflow-y: scroll;
                }
                .activity-item {
                    margin-bottom: 10px;
                }
            }
        `,
    ],
})
export class NewsfeedAsideComponent {
    constructor(private storeFacade: StoreFacade, private router: Router) {}

    openScheduledPost() {
        this.router.navigate(['newsfeed', 'scheduled']);
    }
    newPost() {
        this.router.navigate([{ outlets: { modal: ['create-post'] } }]);
    }
    newTask() {
        this.router.navigate([{ outlets: { modal: ['create-task'] } }]);
    }
    newGroupChat() {
        this.router.navigate(['messages', { outlets: { chatCreate: ['create-chat'] } }]);
    }
    openActivity(activity: number) {
        this.router.navigate(['newsfeed', MOCK_GROUPS[0].id, 'post', MOCK_POSTS[0].id]);
    }
}
