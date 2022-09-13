import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GameService } from './game.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.css']
})
export class Page02Component implements OnInit {

  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  constructor(public translate: TranslateService, public router: Router, public game: GameService) {

  }


  ngOnInit(): void {
    this.game.resetGame();
  }
  startPage() {
    this.router.navigateByUrl('page01');
    this.game.resetGame();
  }


  downloadImage() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'my-robot.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
