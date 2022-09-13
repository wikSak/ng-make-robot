import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  images = [
    '/assets/page02/robot1.png',
    '/assets/page02/robot2.png',
    '/assets/page02/robot3.png',
    '/assets/page02/robot4.png',
  ]

  constructor(public game: GameService) { }


  ngOnInit(): void {
  }
  chooseType(i:number) {
    this.game.selectedType = i;
  }

}
