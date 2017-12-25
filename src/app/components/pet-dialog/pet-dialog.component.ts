import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.css']
})
export class PetDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
