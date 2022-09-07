import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

export const modalViewAnimations = [
    trigger('fadeInModal', [
        state('void', style({ opacity: 0 })),
        transition(
            'void => *',
            group([
                animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ opacity: 1 })),
                query('@*', animateChild(), { optional: true }),
            ])
        ),
    ]),
    trigger('transformModal', [
        state('void', style({ opacity: 0 })),
        transition('void => full', [
            animate('0ms', style({ transform: 'translate(-50%, -50%) scale(0.7)' })),
            animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'translate(-50%, -50%)', opacity: 1 })),
        ]),
        transition('void => modal', [
            animate('0ms', style({ transform: 'translate3d(50%, -50%, 0)' })),
            animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({ transform: 'translate(-50%, -50%)', opacity: 1 })),
        ]),
    ]),
];
