import {trigger, stagger, animate, style, group, query as q, transition, keyframes} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const blockTransition = trigger('blockTransition', [
  transition(':enter', [
    query('.block', style({ opacity: 0 })),
    query('.block', stagger(300, [
      style({ transform: 'translateY(75px)' }),
      animate('500ms ease-out', style({transform: 'translateY(0px)', opacity: 1})), // cubic-bezier(.75,-0.48,.26,1.52)
    ])),
  ]),
  transition(':leave', [
    query('.block', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('250ms ease-in', style({transform: 'translateY(75px)', opacity: 0})), // cubic-bezier(.75,-0.48,.26,1.52)
    ])),        
  ])
]);