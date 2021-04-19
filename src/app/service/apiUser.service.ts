
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../share/model/responsePageable.model';
import { User } from '../share/model/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceUser {

  apiUserUrl = "http://localhost:8080/api/users"
  apiUserLoginUrl = "http://localhost:8080/api/signin"
  apiUseLoginDetailsUrl = "http://localhost:8080/api/me"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 
  }

  public apiServiceGet(path:String): Observable<ResponsePageable>{
   	if(path===null)
	 return this.httpClient.get<any>(this.apiUserUrl);
	else
	 return this.httpClient.get<any>(`${this.apiUserUrl}/${path}`)  
  }
  
  public apiServicePost(user : User): Observable<any>{
      return this.httpClient.post<User>(this.apiUserUrl, user); 
  }

  public apiServiceLogin({login, password}: any){
    return this.httpClient.post<any>(this.apiUserLoginUrl, {login, password});
  }
  public apiServiceUserInfo(): Observable<any>{
    let token = sessionStorage.getItem('token')
    console.log(`Bearer ${token}`)

    return this.httpClient.get(this.apiUseLoginDetailsUrl,
       {
         'headers': {
		'Authorization': `Bearer ${token}`
	 }
       });
  }
} 


