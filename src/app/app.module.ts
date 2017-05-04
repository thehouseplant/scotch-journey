import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      IntroductionComponent,
      OverviewComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      MaterialModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
