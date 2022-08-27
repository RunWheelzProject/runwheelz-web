
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseURL: string = environment?.config?.apiUrl;
  headers: any = { 'content-type': 'application/json' }
  constructor(public httpclient: HttpClient) { }


  public sendOTP(path: string, queryParams: any): Observable<any> {
    return this.httpclient.get(this.baseURL + `${path}${queryParams}`);
  }

  verifyStaffOTP(obj: any) {
    return this.httpclient.post(this.baseURL + '/api/auth/register/runwheelz/staff/verifyotp', obj, {
      headers: this.headers
    });
  }
  verifyVendorOTP(obj: any) {
    return this.httpclient.post(this.baseURL + '/api/auth/register/vendor/verifyotp', obj, {
      headers: this.headers
    });
  }
  verifyVendorRequestOTP(obj: any) {
    return this.httpclient.post(this.baseURL + '/api/vendor/registrationrequest', obj, {
      headers: this.headers
    });
  }
   verifyVendorMechanicOTP(obj: any) {
     return this.httpclient.post(this.baseURL + '/api/auth/register/vendor/mechanic/verifyotp', obj, {
      headers: this.headers
    });
   }
}