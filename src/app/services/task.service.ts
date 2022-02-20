import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/task`);
  }
  getOne(id:any): Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/task/${id}`);
  }
  saveAdd(data: any): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/api/task`,data);
  }
  saveEdit(data: any, id: any): Observable<any>{
    return this.http.patch<any>(`http://localhost:8080/api/task/${id}`, data);
  }
  remove(id:any): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/task/${id}`);
  }
}
