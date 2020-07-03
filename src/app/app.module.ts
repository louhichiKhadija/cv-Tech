import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { ListeCvComponent } from './liste-cv/liste-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvDetailComponent,
    ItemCvComponent,
    ListeCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
