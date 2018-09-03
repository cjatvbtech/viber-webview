import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class AuthService implements OnDestroy {

  constructor() {

  }

  hasValidAccess(userRoles: any[], allowedRole: string): boolean {
    for (const role of userRoles) {
      if (allowedRole === role.name) {
        return true;
      }
    }
    return false;
  }


  ngOnDestroy() {

  }
}
