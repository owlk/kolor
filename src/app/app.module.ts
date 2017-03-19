import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ColorCalculationModule } from './color-calculation/color-calculation.module';
import { ColorSquareComponent } from './color-square/color-square.component'

@NgModule({
  declarations: [
    AppComponent,
    ColorSquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ColorCalculationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
