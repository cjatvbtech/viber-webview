import { Component } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { Spinkit } from 'ng-http-loader';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public spinkit = Spinkit;
  title = 'app';
  constructor (private spinner: SpinnerVisibilityService) {
    setTheme('bs4');
  }
}
