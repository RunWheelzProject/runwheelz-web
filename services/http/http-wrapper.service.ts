import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { ResponseHandler } from './response-handler';

//import { AppUtilityService } from '../../../shared/services/app-utility.service';
//import { AppConfig } from '../../../config/app-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpWrapperService {
  private methodName: string = '';
  private classInstance: any = '';
  reqUrl: string = '';
    config: any;

  constructor(
    public httpClient: HttpClient,
   // private config: AppConfig,
    //private utilityService: AppUtilityService
  ) {}

    /**
     * // -- This function is to identify request type and to get exact API source URL
     * @param apiType -> e.g. cmsAPI, boomiAPI
     */

  public getAPISourceUrl(apiType:string) {
    return this.config.get(apiType);
  }

  /**
   * Set Headers will help to generate headers based on request type and multipart value.
   * @param requestType -> This parameter will identify request type and will help to create related request headers.
   * @param multipart -> This parameter will be helpful for multipart data handling like file upload
   */

  public setHeaders(requestType: string, multipart: boolean = false) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    if (requestType === 'GET_BLOB') {
      headers = headers.append('Content-type', 'application/json');
      headers = headers.append('responseType', 'blob' as 'json');
    } else if (requestType === 'GET_BLOB_FILE') {
      headers = headers.append('Content-type', 'plain/txt');
      headers = headers.append('Content-Disposition', 'attachment');
    } else {
      headers = headers.append('Content-type', 'application/json');
    }

    // -- Multipart Request
    if (multipart === true) {
      headers = headers.append('Access-Control-Allow-Origin', '*');
      //headers = headers.append('x-wss-token', 'Bearer ' + 'userAccessToken');
      headers = headers.append('x-wss-clientid', 'env.ClientID');
      headers = headers.append('x-wss-api-key', 'env.APIKey');
      headers = headers.append('x-wss-cdate', 'env.CDate');
      headers = headers.append('CorrelationID', 'env.CorrelationID');
    }

    return headers;
  }

  /**
   * // -- GET Method requests
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public getRequest(apiType: string, url: string): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.get(this.reqUrl, { headers }).pipe(
      map((res: any) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- GET Method requests (Blob Data)
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public getBlobRequest(apiType: string, url: string): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('GET_BLOB', false);
    return this.httpClient.get(this.reqUrl, { headers, observe: 'response' }).pipe(
      map((res) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- GET Method requests (File Download)
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public getDownloadFileRequest(apiType: string, url: string): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('GET_BLOB_FILE', false);
    return this.httpClient.get(this.reqUrl, { headers }).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- PUT Method requests
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public putRequest(apiType: string, url: string, body: any): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.put(this.reqUrl, body, { headers }).pipe(
      map((res: any) => {
        // if (res.status === 200) {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
        // } else if (res.status === 400) {
        // }
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- PUT Method requests (Blob Data)
   * @param url -> request URL
   * @param body -> request object
   */

  public putBlobRequest(apiType: string, url: string, body: any): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.put(this.reqUrl, body, { headers }).pipe(
      map((res: any) => {
        // if (res.status === 200) {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
        // } else if (res.status === 400) {
        // }
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- POST Method requests
   * @param url -> request URL
   * @param body -> request object
   */

  public postRequest(apiType: string, url: string, body: any): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.post(this.reqUrl, body, { headers }).pipe(
      map((res: any) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- POST Method requests (Blob Data)
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public postBlobRequest(apiType: string, url: string, body: any): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.post(this.reqUrl, body, { headers }).pipe(
      map((res: any) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- POST Method requests (File Upload)
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public postFileUpload(apiType: string, url: string, body: any): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.post(this.reqUrl, body, { headers }).pipe(
      map((res: any) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- PATCH Method requests
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public patchRequest(apiType: string, url: string, body: any): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.patch(this.reqUrl, body, { headers }).pipe(
      map((res: any) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        // console.log('error');
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * // -- DELETE Method requests
   * @param url -> request URL
   * @param body -> (optional) request object
   */

  public deleteRequest(apiType: string, url: string): any {
    this.reqUrl = this.getAPISourceUrl(apiType);
    this.reqUrl += url;
    let headers = this.setHeaders('', false);
    return this.httpClient.delete(this.reqUrl, { headers }).pipe(
      map((res: any) => {
        if(res.hasOwnProperty('status')){
            return this.handleResponseData(res);
        }
        return res;
      }),
      catchError((res: any) => {
        console.log('error');
        return this.handleResponseError(res);
      })
    );
  }

  /**
   * Following methods will help to handle API responses. Response data handling
   * @param res -> received API response object with all response information including status code and body
   */

  public handleResponseData(res: any): Promise<any> {
    // let responseHandler = new ResponseHandler();
    // let responsePromise;
    // switch(res.status){
    //   case 200:
    //     responsePromise = responseHandler.responseCode_200(res);
    //     break;
    // }

    this.methodName = 'responseCode_' + res.status;
    this.classInstance = new ResponseHandler();
    let responsePromise = this.classInstance[this.methodName](...res);

    return Promise.resolve(responsePromise);
  }

  /**
   * Following methods will help to handle API errors. Response error handling
   * @param res -> received API response object with all response information including status code and body
   */

  public handleResponseError(res: any): Promise<any> {
    // let responseHandler = new ResponseHandler();
    // let responsePromise;
    // switch(res.status){
    //   case 400:
    //     responsePromise = responseHandler.responseCode_200(res);
    //     break;
    //   case 500:
    //     responsePromise = responseHandler.responseCode_500(res);
    //     break;
    // }

    this.methodName = 'responseCode_' + res.status;
    this.classInstance = new ResponseHandler();
    let responsePromise = this.classInstance[this.methodName](...res);

    return Promise.reject(responsePromise);
  }
}
