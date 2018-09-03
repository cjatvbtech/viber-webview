import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import {Injectable, OnDestroy} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {catchError, map, takeUntil} from 'rxjs/internal/operators';
import {UserService} from '../services/user.service';
import {DataService} from '../services/data.service';
import * as LoggedUserActions from '../../redux/user/user.action';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild, OnDestroy {

  private $unsubscribe = new Subject<void>();
  // loggeUserObservable: Observable<Member>;
  // private user: Member;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private dataService: DataService,
              private store: Store<AppState>) {

    // this.loggeUserObservable = this.store.select('loggedUser');

    // this.loggeUserObservable
    //   .pipe(takeUntil(this.$unsubscribe))
    //   .subscribe(state => {
    //     this.user = state;
    //   });

  }


  canLoad(route: Route): Observable<boolean> | boolean {
    return of(true); // -> temporarily disable Auth Guard for UI builds
    // if (this.user) {
    //   return of(true);
    // } else if (localStorage.getItem('auth')) {

    //   return this.userService.getMe()
    //     .pipe(takeUntil(this.$unsubscribe),

    //       map((responseMe) => {
    //       const member = this.dataService.convertJsonToMember(responseMe);
    //       this.store.dispatch(new LoggedUserActions.AddLoggedUser(member));
    //       return true;
    //     }),
    //       catchError((error) => {
    //         this.router.navigate(['/error']);
    //         return of(false);
    //     }));

    // } else {
    //   this.router.navigate(['/not-found']);
    //   return of(false);
    // }
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
