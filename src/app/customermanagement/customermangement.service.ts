import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CustomermangementService {

  baseURL: String = environment.config.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllCustomers(): Observable<any> {
    return this.http.get(this.baseURL + '/api/customer/getallcustomers')
  }

  public getCustomerById(id: number): Observable<any> {
    return this.http.get(this.baseURL + `/api/customer/${id}`)
  }

}
