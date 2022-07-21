import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../entities/user';
import { LoginService } from '../services/loginService';

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
    private loginService: LoginService
  ) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      username: '',
      password: ''
    })

  }

  login(){
    let body = { 
      username: this.myForm.value.username,
      password: this.myForm.value.password
    }
    //console.log(body.username);
    //console.log(body.password);
    this.loginService.getUser(body).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/list-of-products');
    },
      response => {
        console.log("Error when trying to login!", response);
        alert("Username or password incorrect!");
      }
      ); 
  }

}
