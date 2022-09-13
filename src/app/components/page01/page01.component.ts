import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.css'],
})
export class Page01Component implements OnInit {
  constructor(public translate: TranslateService, public router: Router) {}

  ngOnInit(): void {}
  changeLang() {
    this.translate.use('en');
    console.log(this.translate.currentLang);
  }

  startPage() {
    this.router.navigateByUrl('page02');

  }
}
