import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.css']
})
export class PetDialogComponent {
  
  private petForm: FormGroup;
  private name: string;
  private breed: string;

  constructor(
    public dialogRef: MatDialogRef<PetDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.petForm = formBuilder.group({
      'name' : [null, Validators.required],
      'breed' : [null, Validators.required]
    });
    console.log(data)
  }

  private closeDialog(){
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
