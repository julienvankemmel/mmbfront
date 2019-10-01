import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
         transition('login => register', [
              query(':enter, :leave',
                   style({ position: 'fixed', width: '100%' }),
                   { optional: true }),
              group([
                   query(':enter', [
                       style({ transform: 'translateY(100%)' }),
                       animate('0.5s ease-in-out',
                       style({ transform: 'translateY(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform:   'translateY(0%)'}),
                       animate('0.5s ease-in-out',
                       style({ transform: 'translateY(-100%)' }))
                   ], { optional: true }),
              ])
         ]),

         transition('profile => profileform', [
          query(':enter, :leave',
               style({ position: 'fixed', width: '100%' }),
               { optional: true }),
          group([
               query(':enter', [
                   style({ transform: 'translateY(100%)' }),
                   animate('0.5s ease-in-out',
                   style({ transform: 'translateY(0%)' }))
               ], { optional: true }),
               query(':leave', [
                   style({ transform:   'translateY(0%)'}),
                   animate('0.5s ease-in-out',
                   style({ transform: 'translateY(-100%)' }))
               ], { optional: true }),
          ])
     ]),

     transition('profileform => profile', [
          query(':enter, :leave',
               style({ position: 'fixed', width: '100%' }),
               { optional: true }),
          group([
               query(':enter', [
                   style({ transform: 'translateY(-100%)' }),
                   animate('0.5s ease-in-out',
                   style({ transform: 'translateY(0%)' }))
               ], { optional: true }),
               query(':leave', [
                   style({ transform:   'translateY(0%)'}),
                   animate('0.5s ease-in-out',
                   style({ transform: 'translateY(100%)' }))
               ], { optional: true }),
          ])
     ]),
         transition('login => *', [
          query(':enter, :leave', style({ position: 'fixed', width: ' 100%' }),
           { optional: true }),
           group([
                query(':enter',[
                    style({ opacity: 0 }),
                    animate('0.7s', style({ opacity: 1 }))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity: 1 }),
                    animate('0.7s', style({ opacity: 0 }))
                ], { optional: true }),
           ])
      ]),
         transition('register => login', [
              query(':enter, :leave',
                   style({ position: 'fixed',  width: '100%' }),
                   { optional: true }),
              group([
                   query(':enter', [
                       style({ transform: 'translateY(-100%)' }),
                       animate('0.5s ease-in-out',
                       style({ transform: 'translateY(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform: 'translateY(0%)' }),
                       animate('0.5s ease-in-out',
                       style({ transform: 'translateY(100%)' }))
                       ], { optional: true }),
               ])
         ]),
        ]);
