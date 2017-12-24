import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PetsListComponent } from './components/pets-list/pets-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent
  ],
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
