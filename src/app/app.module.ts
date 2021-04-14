import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatTableModule} from '@angular/material/table';
import {TabsDataComponent} from './views/tabs-data/tabs-data.component';
import {TableDataComponent} from './views/table-data/table-data.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatDialogModule} from '@angular/material/dialog';  
import {FormUserDialogComponent} from './views/form-user-dialog/form-user-dialog.component';
import {MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FormLoginDialogComponent } from './views/form-login-dialog/form-login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsDataComponent,
    TableDataComponent,
    FormUserDialogComponent,
    FormLoginDialogComponent,
    FormLoginDialogComponent

    
  ],
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
