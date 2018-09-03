import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
// import { takeUntil } from 'rxjs/internal/operators';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class EventResolver implements Resolve<Event> {
  
  private $unsubscribe = new Subject<void>();
  // loggeUserObservable: Observable<Member>;
  // private user: Member;
  
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  resolve( route: ActivatedRouteSnapshot ): Observable<any> {
    return of(true);
    // this.loggeUserObservable = this.store.select('loggedUser');
    
    // this.loggeUserObservable
    //   .pipe(takeUntil(this.$unsubscribe))
    //   .subscribe(state => {
    //     this.user = state;
    //   });
    
    // if (this.user) {
    //   let id = route.paramMap.get('id');
    //   return of({}); // empty object
    // } else {
    //   return of(null);
    // }
  }
}