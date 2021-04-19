import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiServiceUser } from 'src/app/service/apiUser.service';
import { User } from 'src/app/share/model/User.model';

@Component({
  selector: 'app-info-user-dialog',
  templateUrl: './info-user-dialog.component.html',
  styleUrls: ['./info-user-dialog.component.css']
})
export class InfoUserDialogComponent implements OnInit {

  userDetails: User

  constructor(
    public dialogRef: MatDialogRef<InfoUserDialogComponent>,
    private service: ApiServiceUser

  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getUserDetails();
  }
  getUserDetails(){
    return  this.service.apiServiceUserInfo().subscribe(data => {
      this.userDetails = data
      console.log(this.userDetails)
    })
  }

}
