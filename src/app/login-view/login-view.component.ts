import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { User } from '../entities/user';
import { AuthService } from '../services/auth.service';
import { IAppState } from '../store/state/app.state';
import { LoginUser } from '../store/actions/login.actions';
import { UserAuthentification } from '../entities/userAuthentification';
@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  myForm: FormGroup;
  users$: Observable<User[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>
  ) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      username: '',
      password: ''
    })

  }

  login(){
    const payload = { 
      username: this.myForm.value.username,
      password: this.myForm.value.password
    }
   this.store.dispatch(LoginUser({loginCredentials: payload }));
  }

}
