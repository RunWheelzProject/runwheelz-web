import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersManagementService {

  baseURL:String =environment.config.apiUrl;
  
  constructor(private http:HttpClient) { }

public getAllServiceRequests():Observable<any>
{
  return this.http.get(this.baseURL + '/api/servicerequest/getAllServicerequests')
}
  

  public getOrdersById(id:number):Observable<any>
  {
    return this.http.get(this.baseURL + `/api/servicerequest/service_request/${id}`)
  }
}
