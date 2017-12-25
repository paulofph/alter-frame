import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';


// angular material
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatGridListModule,
         MatToolbarModule, MatListModule, MatCardModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
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
