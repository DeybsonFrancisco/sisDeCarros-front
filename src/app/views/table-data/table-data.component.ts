import {Component, OnInit} from '@angular/core'
import { ResponsePageable } from 'src/app/share/model/responsePageable.model';
import { ApiServiceUser} from '../../service/apiUser.service';
import {User} from '../../share/model/User.model'

@Component({
  selector: 'app-table-data',
  styleUrls: ['./table-data.component.css'],
  templateUrl: './table-data.component.html',
})
export class TableDataComponent implements OnInit{

  usersList: ResponsePageable[];
  constructor(public apiServiceUser : ApiServiceUser){
    
  }

  ngOnInit(): void{
    this.getUsers();
  }

  getUsers(){
    return this.apiServiceUser.apiServiceGet("")
      .subscribe(data => {
                      this.usersList = data.content;
                      console.log(this.usersList);
      });
  }
}
