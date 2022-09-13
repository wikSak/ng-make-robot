import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {

  constructor(public game: GameService, public translate: TranslateService) { }

  ngOnInit(): void {
  }

  choosePart(part:number) {
    if(part == 0) {
      this.game.selectedHead = this.game.selectedType;
    } else if(part == 1) {
      this.game.selectedBody = this.game.selectedType;
    } else if(part == 2) {
      this.game.selectedArmLeft = this.game.selectedType;
    } else if(part == 3) {
      this.game.selectedArmRight = this.game.selectedType;
    } else if(part == 4) {
      this.game.selectedLegLeft = this.game.selectedType;
    } else if(part == 5) {
      this.game.selectedLegRight = this.game.selectedType;
    }
  }

}
