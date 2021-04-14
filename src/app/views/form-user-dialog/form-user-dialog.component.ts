import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiServiceUser } from 'src/app/service/apiUser.service';

@Component({
  selector: 'app-form-user-dialog',
  templateUrl: './form-user-dialog.component.html',
  styleUrls: ['./form-user-dialog.component.css']
})
export class FormUserDialogComponent implements OnInit {
  hide = true
  formUser: FormGroup

  constructor(
    private  formBiulder : FormBuilder,
    public dialogRef: MatDialogRef<FormUserDialogComponent>,
    public service : ApiServiceUser
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
      password:['', [Validators.required]],
      phone:['', [Validators.required]]
    })
  }
  saveUser(){
    this.service.apiServicePost(this.formUser.value).subscribe(result => {
      this.formUser.reset()
      this.onNoClick()
      alert("Usuario salvo")
    })
  }

}
