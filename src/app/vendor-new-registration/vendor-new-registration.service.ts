import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorNewRegistrationService {

  baseURL: string = environment?.config?.apiUrl;

  constructor( public http: HttpClient) { }

  public getallvendorregistrationrequests(): Observable<any> {
    return this.http.get(this.baseURL + '/api/vendor/getallvendorregistrationrequests');
  }
  
  public updateVendorRequestinfo(id: number, body: any): Observable<any>{
    return this.http.put(this.baseURL + '/api/vendor/editvrr',body);
  }
public getVendorRequestById(id:number): Observable<any>{
  return this.http.get(this.baseURL + `/api/vendor/vrr/ ${id}`)
}
  
  public updateExecutiveinfo(id: number, body: any): Observable<any> {
    console.log(body);
    return this.http.put(this.baseURL +'/'+ `${id}`,body);
  }
  public getExecutiveNames(): Observable<any> {
    return this.http.get(this.baseURL + '/');
  }

}
