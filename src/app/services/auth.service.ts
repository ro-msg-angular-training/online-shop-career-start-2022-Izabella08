import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../entities/user';
import { UserAuthentification } from '../entities/userAuthentification';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = false;
  redirectUrl: string | null = null;
  loginUser: User;


  constructor( private httpService: HttpClient){
  }

  login(newUser: UserAuthentification): Observable<User>{
    return this.httpService.post<User>(environment.URL + '/login', newUser).pipe(tap((user) => {this.loginUser = user}));
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  checkRole(role: string): boolean {
     return this.loginUser?.roles.includes(role) == true;
  }
  
}
