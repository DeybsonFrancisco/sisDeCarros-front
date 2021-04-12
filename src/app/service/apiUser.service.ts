import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../share/model/responsePageable.model';
import { User } from '../share/model/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceUser {

  apiUrl = "http://localhost:8080/api/users"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 
  }

  public apiServiceGet(path:String): Observable<ResponsePageable>{
   	if(path===null)
	 return this.httpClient.get<any>(this.apiUrl);
	else
	 return this.httpClient.get<any>(`${this.apiUrl}/${path}`)  }

    public apiServicePost(user : User): Observable<any>{
      return this.httpClient.post<User>(this.apiUrl, user);  }
  
  }
