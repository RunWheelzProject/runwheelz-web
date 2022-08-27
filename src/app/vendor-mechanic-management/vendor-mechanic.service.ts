import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorMechanicService {

  baseURL: string = environment?.config?.apiUrl;

  constructor( public http: HttpClient) { }

  public getAllVendorMechanic(): Observable<any> {
    return this.http.get(this.baseURL + '/api/vendorMechanic/getAllVendorMechanic');
  }
  public getVendorMechanicById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/vendorMechanic/ ${id}`);
  }

  
 
  
}
