import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginDialogComponent } from '../form-login-dialog/form-login-dialog.component';
import { InfoUserDialogComponent } from '../info-user-dialog/info-user-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    if(sessionStorage.getItem('token')!== null || undefined){
      const dialogRefCard = this.dialog.open(InfoUserDialogComponent, {
        minWidth: '450px'
        })
        dialogRefCard.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    }
    else{
        const dialogRefForm = this.dialog.open(FormLoginDialogComponent, {
        minWidth: '450px'
        })
        dialogRefForm.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    }
  }

}
