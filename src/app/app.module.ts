import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatGridListModule,
         MatToolbarModule, MatListModule, MatCardModule, MatInputModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';

// services
import { PetsService } from './services/pets.service';
import { PetDialogComponent } from './components/pet-dialog/pet-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    PetDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatGridListModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    PetsService
  ],
  entryComponents: [
    PetDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
