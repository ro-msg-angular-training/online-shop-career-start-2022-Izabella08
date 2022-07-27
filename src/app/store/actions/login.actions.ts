import {createAction, props} from "@ngrx/store";
import { User } from "src/app/entities/user";
import { UserAuthentification } from "src/app/entities/userAuthentification";

export const LoginUser = createAction(
    '[Login] Login', 
    props<{ loginCredentials: UserAuthentification }>()
);

export const LoginUserSuccess = createAction(
    '[Login] Login Success', 
    props<{ user: User }>()
);

export const LoginUserError = createAction(
    '[Login] Login Error', 
    props<{ error: any }>()
);