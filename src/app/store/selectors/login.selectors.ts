import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ILoginState } from "../state/login.state";

export const selectAuthState = (state: IAppState) => state.login;

export const selectAdminRole = createSelector(
    selectAuthState,
    (state: ILoginState) => state.user?.roles.includes('admin') || false
  );
  
  export const selectCustomerRole = createSelector(
    selectAuthState,
    (state: ILoginState) => state.user?.roles.includes('customer') || false
  );