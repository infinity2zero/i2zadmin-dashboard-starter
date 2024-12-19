import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';

const TRANSITION_DURATION = 300;

export const openCloseAnimation = trigger('openClose', [
  state('true', style({ height: AUTO_STYLE})),
  state('false', style({ height: 0 })),
  transition('false <=> true', animate(`${TRANSITION_DURATION}ms ease-in`)),
]);

export const rotateAnimation = trigger('rotate', [
  state('true', style({ transform: 'rotate(-90deg)' })),
  transition('false <=> true', animate(`${TRANSITION_DURATION}ms ease-out`)),
]);

//[@rotateB4]="node.isOpen" currently not finding a way to change css variable value with angular animation
// export const rotateAnimationForBefore = trigger('rotateB4', [
//   state('true', style({ '--degree': `90deg` })),
//   state('false', style({ '--degree': `0deg` })),
//   transition('false <=> true', animate(`${TRANSITION_DURATION}ms ease-out`)),
// ]);



