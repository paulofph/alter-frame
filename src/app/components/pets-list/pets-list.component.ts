import { Component, OnInit } from '@angular/core';

// services
import { PetsService } from './../../services/pets.service'

// models
import { PetsViewModel } from './../../models/pets-view-model.model'
import { Pet } from './../../models/pet.model'

@Component({
  selector: 'app-components-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  private petsViewModel: PetsViewModel = new PetsViewModel();
  private isEditMode: boolean = false;

  constructor(
    private petService: PetsService
  ) { }

  ngOnInit() {
    // load All Pets
    this.petService.getAllPets().subscribe(data => { 
      this.petsViewModel.pets = data;
    }
      , error => console.log(error));
  }

  private activateOrDeactivateEditMode(){
    this.isEditMode = !this.isEditMode;
  }

  private addNewPet(){
    this.isEditMode = true;
    this.petsViewModel.pets.push(new Pet())
  }
}