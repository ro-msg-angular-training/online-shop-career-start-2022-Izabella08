import { createReducer, on } from "@ngrx/store";
import { initialLoginState } from "../state/login.state";
import { LoginUser, LoginUserSuccess, LoginUserError } from "../actions/login.actions";


export const loginReducers = createReducer(
    initialLoginState,

  on(LoginUser, (state) => ({
    ...state,
    loading: true,
  })),

  on(LoginUserSuccess, (state, { user }) => ({
    ...state,
    currentUser: user,
    status: "success",
    error: "",
  })),

  on(LoginUserError, (state) => ({
    ...state,
    status: "error",
    error: "",
  }))
)