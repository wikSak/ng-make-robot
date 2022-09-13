import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01Component } from './components/page01/page01.component';
import { Page02Component } from './components/page02/page02.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MenuComponent } from './components/page02/menu/menu.component';
import { RightMenuComponent } from './components/page02/right-menu/right-menu.component';
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    Page02Component,
    MenuComponent,
    RightMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'pl',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
