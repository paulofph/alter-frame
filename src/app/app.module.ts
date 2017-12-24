import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';


// angular material
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';

// services
import { PetsService } from './services/pets.service';


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
    BrowserModule,
    HttpModule
  ],
  providers: [
    PetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
