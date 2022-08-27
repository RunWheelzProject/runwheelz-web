/*import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,of} from 'rxjs';
import { HttpWrapperService } from 

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  
  constructor(public http: HttpWrapperService) {
    let user = (sessionStorage.getItem('staff_info')) ? sessionStorage.getItem('staff_info'): null;
    this.currentUserSubject = new BehaviorSubject<any>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

  public login(path: string, body: any): Observable<any> {
    let user = this.http.postRequest('apiUrl', path, body);
    store user details and jwt token in local storage to keep user logged in between page refreshes
    this.currentUserSubject.next(user);
    return user;
  }

  public logout() {
    sessionStorage.clear();
    this.currentUserSubject.next(null);
  }

  public getUsers(path: string): Observable<any>{
    return this.http.getRequest('apiUrl', path);
  }

  -- Token
  public getAccessToken() {
    return localStorage.getItem('token');
  }

  public renewAccessToken() {
    return  of('test');
  }

  public handleRefreshTokenResponse(res: any) {
    return null;
  }

  public setUserAccessControlRules() { }
  
}
*/