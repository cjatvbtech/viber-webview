import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {AppState} from "../../app.state";
import {Store} from "@ngrx/store";
import * as LoggedUserActions from '../../redux/user/user.action';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router, 
    private store: Store<AppState>
  ) { 
    
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('auth');
    let clonedReq = req;

    if (req.url.indexOf('authorize') !== -1) return next.handle(clonedReq).pipe(tap((event:  HttpEvent<any>) => {}));

    if (authToken) {
      clonedReq = req.clone({
        headers: req.headers.set('Authorization',  'Token ' + authToken)
      });
    }

    return next.handle(clonedReq)
      .pipe(tap((event:  HttpEvent<any>) => {

      //    do nothing

    }, (err: any) => {

      if (err instanceof HttpErrorResponse) {
        this.handleErrorStatus(err.status, err);
      }

    }));
  }

  private handleErrorStatus(statusCode: number, res: HttpErrorResponse) {
    switch (statusCode) {
      case 401:
      case 403: 
        localStorage.clear();
        this.store.dispatch(new LoggedUserActions.RemoveLoggedUser());
        break;

      case 400:
        Object.keys(res.error).forEach((key, value) => {
          if (key !== 'non_field_errors') {
            res.error[key].forEach(message => {
              console.error(message);
            });
          } else {
            console.error(res.error[key]);
          }
        });
        break;

      case 500: swal({
        title: 'Error',
        type: 'error',
        text: 'Unable to process your request. Please try again later.'
      });
        break;
    }
  }
}
