import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ButtonModule} from 'primeng/button'
import { CommonModule } from '@angular/common';
import { ProjectService } from './services/project.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
   AppComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ScrollPanelModule, ButtonModule, CommonModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
