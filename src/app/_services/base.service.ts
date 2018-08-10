
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  Headers,
  Request,
  RequestOptions,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BaseService {
  protected baseUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // private httpOptions;
  constructor(
    protected http: HttpClient,

  ) {
    this.baseUrl = environment.baseUrl;
    /*const data = JSON.parse(localStorage.getItem('gTdhs%HJ324SDgd'));
    let headers = new HttpHeaders ({ 'Content-Type': 'application/json' });
    if (data) {
      headers = headers.set('App', 'APP_BCK')
                       .set( 'token', data.sessionTokenBck)
                       .set('adminemail', data.email);
    }
    this.httpOptions = { headers: headers};
    console.log(this.httpOptions);*/ //SE USO INTERCEPTOR
  }

  private log(message: string) {
    console.log(message);
  }

  protected get(relativeUrl: string): Observable<any> {
    console.log('GET', this.baseUrl + relativeUrl);
    return this.http
      .get<any>(this.baseUrl + relativeUrl, this.httpOptions)
      //.catch((error: any) => this.handleError(error))
      .finally(() => { });
  }

  protected post(relativeUrl: string, obj: any): Observable<any> {
    console.log('POST', this.baseUrl + relativeUrl, obj);
    return this.http
      .post<any>(this.baseUrl + relativeUrl, obj, this.httpOptions)
      //.catch((error: any) => this.handleError(error))
      .finally(() => { });
  }

  protected postFormData(relativeUrl: string, obj: FormData): Observable<any> {
    console.log('POST FormData', this.baseUrl + relativeUrl, obj);
    return this.http
      .post<any>(this.baseUrl + relativeUrl, obj)
      //.catch((error: any) => this.handleError(error))
      .finally(() => { });
  }

  protected delete(relativeUrl: string): Observable<any> {
    console.log('DELETE', this.baseUrl + relativeUrl);
    return this.http
      .delete<any>(this.baseUrl + relativeUrl, this.httpOptions)
      //.catch((error: any) => this.handleError(error))
      .finally(() => { });
  }

  protected put(relativeUrl: string, obj: any): Observable<any> {
    console.log('PUT', this.baseUrl + relativeUrl, obj);
    return this.http
      .put<any>(this.baseUrl + relativeUrl, obj, this.httpOptions)
      //.catch((error: any) => this.handleError(error))
      .finally(() => { });
  }

  protected handleResponse(res: Response): any {
    const data = res.json();
    if (data.PoseeErrores) {
      console.log(`Server Error: ${data.Errores[0].Codigo}`);
    } else {
      return data;
    }
  }

  protected handleError(err: any) {
    if (err.error.PoseeErrores) {
      const error = err.error.Errores[0];
    } else {
      console.error('handleError:', err);
    }

    // err.error.map((x: Respuesta) => {
    //   this.alert.error(x.Errores[0].Descripcion, 'Error');
    // });
    // .catch(error => { });
    // this.alert.error('Error');
    // return Observable.throw(err.json().error || 'Server error');
    // return err;
    // return Observable.empty<HttpEvent<any>>();
  }



  protected parametrosUrl(obj: any): string {
    let params: string;
    for (const key in obj)
    {
      if (obj[key]) {
        if (params) {
          params += '&';
        } else {
          params = '';
        }
        params += `${key}=${obj[key]}`;
      }
    }
    return `?${params}`;
  }
}
