import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material
import { MatButtonModule, MatCheckboxModule, MatSidenavModule, MatGridListModule,
         MatToolbarModule, MatListModule, MatCardModule, MatInputModule, MatDialogModule,
         MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { PetDialogComponent } from './components/pet-dialog/pet-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

// services
import { PetsService } from './services/pets.service';
import { SearchPipe } from './_shared/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    PetDialogComponent,
    ConfirmDialogComponent,
    SearchPipe
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
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatGridListModule,
    BrowserModule,
    HttpModule
  ],
  providers: [
    PetsService
  ],
  entryComponents: [
    PetDialogComponent,
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
