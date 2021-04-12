import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-user-dialog',
  templateUrl: './form-user-dialog.component.html',
  styleUrls: ['./form-user-dialog.component.css']
})
export class FormUserDialogComponent implements OnInit {
  formUser: FormGroup

  constructor(
    private  formBiulder : FormBuilder,
    public dialogRef: MatDialogRef<FormUserDialogComponent>,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.formUser = this.formBiulder.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      birthDay:['', [Validators.required]],
      email:['', [Validators.required]],
      login:['', [Validators.required]],
      phone:['', [Validators.required]]
    })
  }

}
