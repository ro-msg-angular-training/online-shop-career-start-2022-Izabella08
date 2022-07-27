import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { catchError, switchMap} from "rxjs/operators";
import { map, of, tap} from "rxjs";
import { LoginUser,LoginUserSuccess, LoginUserError } from "../actions/login.actions";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {

    constructor(
        private productService: AuthService,
        private actions$: Actions,
        private router: Router,
      ) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginUser),
            switchMap((action) =>
                this.productService.login(action.loginCredentials).pipe(
                map((data) => LoginUserSuccess({user: data})),
                catchError((err) => of(LoginUserError({error: err})))
                )
            )
        )
    );

    loginSuccess$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(LoginUserSuccess),
            tap(() => {
              this.router.navigateByUrl('/list-of-products');
            })
          ),
        { dispatch: false }
    );
    
    loginError$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(LoginUserError),
            tap(() => alert("Username or password incorrect!"))
          ),
        { dispatch: false }
    );
    
}