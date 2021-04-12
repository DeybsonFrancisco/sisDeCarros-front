import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginDialogComponent } from '../form-login-dialog/form-login-dialog.component';

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

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(FormLoginDialogComponent, {
      minWidth: '450px'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
