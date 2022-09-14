import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VendormanagementService {

  baseURL: string = environment?.config?.apiUrl;

  constructor( public http: HttpClient) { }

  public getAllVendors(): Observable<any> {
    return this.http.get(this.baseURL + '/api/vendor/getallvendors');
  }

  public updateVendorinfo(id: number, body: any): Observable<any>{
    return this.http.put(this.baseURL + '/api/vendor/editvendor',body);
  }

  public getVendorById(id:number): Observable<any> {
    return this.http.get(this.baseURL + `/api/vendor/${id}`);
  }
  
}
