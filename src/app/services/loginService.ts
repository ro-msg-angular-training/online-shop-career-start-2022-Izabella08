import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, tap } from 'rxjs';
import { User } from '../entities/user';
import { UserAuthentification } from '../entities/userAuthentification';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    loginUser: User;

    URL = "http://localhost:3000";

    constructor( private httpService: HttpClient){
    }

    getUser(newUser: UserAuthentification): Observable<User>{
        return this.httpService.post<User>(this.URL + '/login', newUser).pipe(tap((user) => {this.loginUser = user}));
    }

    

 }