import {Injectable, OnDestroy} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import {catchError, map, takeUntil, tap} from 'rxjs/internal/operators';
// import * as LoggedUserActions from '../../redux/user/user.action';

@Injectable()
export class AllowAllGuard implements CanLoad, CanActivate, CanActivateChild, OnDestroy {


  private $unsubscribe = new Subject<void>();
  // loggeUserObservable: Observable<Member>;
  // private user: Member;

  constructor(
    private router: Router,
    private userService: UserService,
    private dataService: DataService,
    private store: Store<AppState>
  ) {
    // this.loggeUserObservable = this.store.select('loggedUser');

    // this.loggeUserObservable
    //   .pipe(takeUntil(this.$unsubscribe))
    //   .subscribe(state => {
    //     this.user = state;
    //   });
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.getUserIfLoggedIn();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.getUserIfLoggedIn();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.getUserIfLoggedIn();
  }

  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  private getUserIfLoggedIn(): Observable<boolean> {
    return of(true);
    // if (this.user) {
    //   return of(true);
    // } else if (localStorage.getItem('auth')) {

    //   return this.userService.getMe()
    //     .pipe(takeUntil(this.$unsubscribe),

    //       map((responseMe) => {
    //         const member = this.dataService.convertJsonToMember(responseMe);
    //         this.store.dispatch(new LoggedUserActions.AddLoggedUser(member));
    //         return true;
    //       }),
    //       catchError((error) => {
    //         return of(true);
    //       })
    //     );

    // } else {
    //   return of(true);
    // }
  }
}
