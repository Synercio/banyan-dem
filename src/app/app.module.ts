import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule}         from './app-routing.module';
import {AppComponent}             from './app.component';
import {DetailComponent}          from "./components/details/detail.component";
import {MatIconModule}            from "@angular/material/icon";
import {ContentComponent}         from "./components/content/content.component";
import {MatSliderModule}          from "@angular/material/slider";
import {FormsModule}              from "@angular/forms";
import {MatCheckboxModule}        from "@angular/material/checkbox";
import {BrowserAnimationsModule}  from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
