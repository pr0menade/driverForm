import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

import 'hammerjs';

import { AppComponent, DriverDialog }  from './app.component';
import { DriverComponent } from './drivers/driver.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule, MdDialogModule, MdButtonModule],
  declarations: [ AppComponent, DriverComponent,  DriverDialog],
  entryComponents: [DriverDialog],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
