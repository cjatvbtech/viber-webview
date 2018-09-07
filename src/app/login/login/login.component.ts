import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../core/services/user.service';
import {DataService} from '../../core/services/data.service';
import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router, ActivatedRoute} from '@angular/router';
import {AppState} from '../../app.state';
// import {Store} from '@ngrx/store';
import {Subject} from 'rxjs';
// import {takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  invalidLogin: boolean;
  private $unsubscribe = new Subject<void> ();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dataService: DataService,
    private alertConfig: NgbAlertConfig,
    private router: Router, 
    private route: ActivatedRoute,
    // private store: Store<AppState>
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.alertConfig.type = 'danger';
    this.invalidLogin = false;
  }

  ngOnInit() {
    this.loginForm.setValue({ username: '', password: '' });
  }

  login() {
    this.invalidLogin = false;
    
    let url = this.route.snapshot.queryParams.next;
    
    if (this.loginForm.valid) {

    } else {
      this.dataService.validateFields(this.loginForm);
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get _loginForm() {
    return this.loginForm;
  }

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }


}
