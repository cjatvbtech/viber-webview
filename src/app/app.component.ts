import { Component } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { Spinkit } from 'ng-http-loader';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { setTheme } from 'ngx-bootstrap/utils';
import { routerTransition } from './shared/animations/router.animations';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {
  public spinkit = Spinkit;
  title = 'app';
  constructor (private spinner: SpinnerVisibilityService) {
    setTheme('bs4');
  }

  getPage(outlet) {
    return outlet.activatedRouteData['state'];
  }
}
