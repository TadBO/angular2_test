import { trigger, state, animate, transition, style } from '@angular/animations';
export const hero = trigger('hero', [
  state('inactive', style({
    backgroundColor: '#eee',
    transform: 'scale(1)'
  })),
  state('active', style({
    backgroundColor: '#cfd8dc',
    transform: 'scale(2)'
  })),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('200ms ease-out'))
]);
