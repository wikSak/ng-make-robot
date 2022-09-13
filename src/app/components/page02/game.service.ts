import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  selectedType = 0;
  selectedHead = 0;
  selectedBody = 0;
  selectedArmLeft = 0;
  selectedArmRight = 0;
  selectedLegLeft = 0;
  selectedLegRight = 0;

  head = [
    '/assets/page02/heads/r1.png',
    '/assets/page02/heads/r2.png',
    '/assets/page02/heads/r3.png',
    '/assets/page02/heads/r4.png',

  ];
  armLeft = [
    'assets/page02/arm-left/r1.png',
    'assets/page02/arm-left/r2.png',
    'assets/page02/arm-left/r3.png',
    'assets/page02/arm-left/r4.png',
 
  ];
  armRight = [
    'assets/page02/arm-right/r1.png',
    'assets/page02/arm-right/r2.png',
    'assets/page02/arm-right/r3.png',
    'assets/page02/arm-right/r4.png',
  ];
  body = [
    'assets/page02/body/r1.png',
    'assets/page02/body/r2.png',
    'assets/page02/body/r3.png',
    'assets/page02/body/r4.png',
 
  ];
  legLeft = [
    'assets/page02/leg-left/r1.png',
    'assets/page02/leg-left/r2.png',
    'assets/page02/leg-left/r3.png',
    'assets/page02/leg-left/r4.png',

  ];
  legRight = [
    'assets/page02/leg-right/r1.png',
    'assets/page02/leg-right/r2.png',
    'assets/page02/leg-right/r3.png',
    'assets/page02/leg-right/r4.png',
  ];

  constructor() { }

  resetGame() {
    this.selectedType = 0;
    this.selectedHead = 0;
    this.selectedBody = 0;
    this.selectedArmLeft = 0;
    this.selectedArmRight = 0;
    this.selectedLegLeft = 0;
    this.selectedLegRight = 0;
  }
}
