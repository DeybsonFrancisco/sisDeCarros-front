import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormUserDialogComponent } from '../form-user-dialog/form-user-dialog.component';

@Component({
  selector: 'app-tabs-data',
  templateUrl: './tabs-data.component.html',
  styleUrls: ['./tabs-data.component.css']
})
export class TabsDataComponent implements OnInit {



  constructor(
    public dialog : MatDialog
  ) { }

  ngOnInit(): void {
    
  }

  openDialogFormUser(): void {
    const dialogRef = this.dialog.open(FormUserDialogComponent, {
      minWidth: '450px'
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

 

  
}
