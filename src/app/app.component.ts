import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app-create';
  isEn = false;
   languageList = [
    {code: 'en', label: 'English'},
    {code: 'fr', label: 'French'}
  ];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');

  }

  changeLang(lang:string) {
    this.translate.use(lang);
    if(this.translate.currentLang == 'pl') {
      this.isEn = false;
    } else  if(this.translate.currentLang == 'en') {
      this.isEn = true;
    }
   
  }
}
