

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, pipe, throwError } from "rxjs";
import { environment } from 'src/environments/environment';
import { Staff } from '../shared/models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffmanagementService {

  baseURL: string = environment?.config?.apiUrl;

  constructor(private http: HttpClient, public httpclient: HttpClient) { 
  }

 /* public UpdateStaffinfo(body: any, staff:Staff): Observable<any> {
    return this.httpclient.put(this.baseURL + '/api/staff',body);
  }*/

  // public updateStaffinfo(id: number, body: any): Observable<any> {
  //   return this.httpclient.put(this.baseURL +'/api/staff/'+ `${id}`,body);
  // }
  public updateStaffinfo(id: number, body: any): Observable<any> {
    return this.httpclient.put(this.baseURL +'/api/staff/editStaff',body);
  }
  public getAllStaff(): Observable<any> {
    return this.http.get(this.baseURL + '/api/staff/getAllStaff');
  }
  
  public getStaffById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/staff/${id}`)
    
  }
  public getStaffRoles(): Observable<any> {
    return this.http.get(this.baseURL + '/api/admin/getStaffRoles');
  }
 
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
 
}