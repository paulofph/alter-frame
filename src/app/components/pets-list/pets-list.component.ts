import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// components
import { PetDialogComponent } from './../pet-dialog/pet-dialog.component'

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


  private activateOrDeactivateEditMode(){
    this.isEditMode = !this.isEditMode;
  }

  private addNewPet(){
    this.openDialog(new Pet());
  }

  private editPet(pet: Pet){
    this.openDialog(pet);
  }

  private addPetToViewModel(newPet: Pet){
    //ToDo: generate Id
    this.petsViewModel.pets.push(newPet);
  }

  private openDialog(pet: Pet): void {
    let dialogRef = this.dialog.open(PetDialogComponent, {
      width: '350px',
      data: { name: pet.name, breed: pet.breed }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!pet.id && result)
        this.addPetToViewModel(result);
      else
        Object.assign(pet, result)
    });
  }
}