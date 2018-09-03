import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
//import { Http, URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  // registerNewUser(member: Member, file: File): Observable<any> {
  //   const headerOpts = new HttpHeaders()
  //     .append('Content-Type', 'multipart/form-data');
  //   const url = environment.baseUrl + '/api/v1/members/signup/';
  //   const fd: FormData = new FormData();
  //   if (file !== null) fd.append('id_picture', file, file.name);
  //   for (let f in member) {
  //     fd.append(f, member[f]);
  //   }
  //   return this.post(url, fd);
  // }

  // loginUser(user: LoginCredentials): Observable<any> {
  //   // console.log('loggin in user');
  //   const url = environment.baseUrl + '/api/v1/authorize/';
  //   return this.post(url, user)
  //     .pipe(map(response => {
  //       return response.token;
  //     }));
  // }

  getMe(): Observable<any> {
    const url = environment.baseUrl + '/api/v1/members/me/';
    return this.get(url);
  }
}
