import {Injectable, OnDestroy} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, ActivatedRoute,
  RouterStateSnapshot
} from '@angular/router';

import {Observable, of} from 'rxjs';

@Injectable()
export class LoginGuard implements CanLoad {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    
    if (localStorage.getItem('auth')) {
      let _url = this.route.snapshot.paramMap.get('next');
      if (_url) {
        this.router.navigateByUrl(_url);
      } 
      
      this.router.navigate(['/home']);
      return of(false);
    }
    return of(true);
  }
}
