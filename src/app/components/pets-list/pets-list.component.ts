import { Component, OnInit } from '@angular/core';

// services
import { PetsService } from './../../services/pets.service'

// models
import { PetsViewModel } from './../../models/pets-view-model.model'

@Component({
  selector: 'app-components-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  private petsViewModel: PetsViewModel;

  constructor(
    private petService: PetsService
  ) { }

  ngOnInit() {
    // load All Pets
    this.petService.getAllPets().subscribe(data => { 
      this.petsViewModel = data;
      console.log("load", data);
    }
      , error => console.log(error));
  }
}