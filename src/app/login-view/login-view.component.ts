import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { AuthService } from '../services/auth.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
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

    this.authService.login(payload).subscribe(data => {const redirectUrl = this.authService.redirectUrl;
      this.router.navigateByUrl("/list-of-products");
    })
  }

}
