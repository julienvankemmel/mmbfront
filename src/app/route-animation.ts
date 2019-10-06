import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';

 /**
  * Ce service va gérer les transitions entre les routes
  */

export const slideInAnimation =
    trigger('routeAnimations', [
         /**
          * animation à partir de home
          */
     transition('home => login', [
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
     transition('home => register', [
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

     /**
      * animation entre login et register
      */
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

         transition('dashboard => profileform', [
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

     transition('profileform => dashboard', [
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
        ]);
