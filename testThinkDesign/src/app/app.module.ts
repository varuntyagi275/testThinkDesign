import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
