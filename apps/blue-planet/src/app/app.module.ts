import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { UiModule } from './ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsPanelComponent } from './details-panel/details-panel.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ActionBarComponent, DetailsPanelComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, ReactiveFormsModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
