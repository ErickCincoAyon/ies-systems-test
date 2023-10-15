import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  toggleAnimation( 
    element: Element, 
    show: boolean, 
    property: string, 
    firstValue: string, 
    secondValue: string, 
    duration: number 
  ): void {

    if( show ) {
      element.animate([
          { [property]: firstValue },
          { [property]: secondValue }
      ], {
          duration,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });

    } else {

      element.animate([
        { [property]: secondValue },
        { [property]: firstValue }
      ], {
        duration,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'alternate',
        fill: 'forwards'
      });
    }
  }
}
