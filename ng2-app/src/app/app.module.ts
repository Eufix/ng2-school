import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShowcaseModule } from 'ng2-lib';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowcaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
