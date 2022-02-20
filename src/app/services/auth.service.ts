import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
   isAuthenticated(){
    let token = localStorage.getItem('currentUser');
    if(token != undefined && token.length > 0){
      return true;
    }
    return false;
  }
  register(data: Object):Observable<any[]>{

    return this.httpClient.post<any[]>(`http://localhost:8080/api/register`,data)
  }
  login(data: Object): Observable<any[]>{
    return this.httpClient.post<any[]>(`http://localhost:8080/api/login`,data)
  }
  logout(): Observable<any[]>{
    return this.httpClient.get<any[]>(`http://localhost:8080/api/logout`)
  }


}
