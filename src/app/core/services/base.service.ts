import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

export class BaseService {

  constructor(private http: HttpClient) { }

  protected post(url: string, postObject?: any): Observable<any> {
    return this.http.post(url, postObject);
  }

  protected get(url: string, params?: HttpParams): Observable<any> {
    return this.http.get(url, { params: params });
  }

  protected patch(url: string, object?: any): Observable<any> {
    return this.http.patch(url, object);
  }

  protected delete(url: string): Observable<any> {
    return this.http.delete(url, {});
  }

  protected put(url: string, postObject?: any): Observable<any> {
    return this.http.put(url, postObject);
  }
}
