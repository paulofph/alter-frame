import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// components
import { PetDialogComponent } from './../pet-dialog/pet-dialog.component'
import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component'

// services
import { PetsService } from './../../services/pets.service'

// models
import { PetsViewModel } from './../../models/pets-view-model.model'
import { Pet } from './../../models/pet.model'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-components-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  private petsViewModel: PetsViewModel = new PetsViewModel();
  private isEditMode: boolean = false;

  constructor(
    private petService: PetsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    // load All Pets
    this.petService.getAllPets().subscribe(data => { 
      this.petsViewModel.pets = data;
    },
    error => console.log(error));
  }


  private addNewPet(){
    this.openPetDialog(new Pet());
  }

  private deletePet(pet:Pet){
    this.openConfirmDialog(pet.id);
  }

  private editPet(pet: Pet){
    this.openPetDialog(pet);
  }

  private addPetToViewModel(newPet: Pet){
    //ToDo: generate Id
    this.petsViewModel.pets.push(newPet);
  }

  private getAllBreeds(): string[] {
    return this.petsViewModel.pets.map(function(e) { return e['breed']; }).filter(function(e,i,a){
        return i === a.indexOf(e);
    });
  }

  private openConfirmDialog(id: string): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
        this.removePetFromViewModel(id)
    });
  }

  private openPetDialog(pet: Pet): void {
    let breedOptions = this.getAllBreeds();
    let dialogRef = this.dialog.open(PetDialogComponent, {
      width: '350px',
      data: { name: pet.name, breed: pet.breed, breedOptions: breedOptions }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!pet.id && result)
        this.addPetToViewModel(result);
      else
        Object.assign(pet, result)
    });
  }

  private removePetFromViewModel(id: string){
    this.petsViewModel.pets = this.petsViewModel.pets.filter(function( obj ) {
      return obj.id !== id;
    });
  }
}