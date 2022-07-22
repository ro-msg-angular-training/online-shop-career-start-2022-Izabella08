import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../entities/user';
import { UserAuthentification } from '../entities/userAuthentification';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = false;
  redirectUrl: string | null = null;
  loginUser: User;

  URL = "http://localhost:3000";

  constructor( private httpService: HttpClient){
  }

  login(newUser: UserAuthentification): Observable<User>{
    return this.httpService.post<User>(this.URL + '/login', newUser).pipe(tap((user) => {this.loginUser = user}));
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  checkRole(role: string): boolean {
     return this.loginUser?.roles.includes(role) == true;
  }
  
}
