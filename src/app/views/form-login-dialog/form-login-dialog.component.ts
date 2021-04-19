import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiServiceUser } from 'src/app/service/apiUser.service';

@Component({
  selector: 'app-form-login-dialog',
  templateUrl: './form-login-dialog.component.html',
  styleUrls: ['./form-login-dialog.component.css']
})
export class FormLoginDialogComponent implements OnInit {

  formLogin: FormGroup

  constructor(
    public dialogRef: MatDialogRef<FormLoginDialogComponent>,
    private formBuilder: FormBuilder,
    private service : ApiServiceUser
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      login: ['', [Validators.required]],
      password:['', Validators.required]
    })
  }
  login(){
    return this.service.apiServiceLogin(this.formLogin.value).subscribe(data =>{
      sessionStorage['token']=data.token
      this.onNoClick()
      this.formLogin.reset()
    })
  }

}
