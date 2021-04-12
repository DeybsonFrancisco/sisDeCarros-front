import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-login-dialog',
  templateUrl: './form-login-dialog.component.html',
  styleUrls: ['./form-login-dialog.component.css']
})
export class FormLoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormLoginDialogComponent>,
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
