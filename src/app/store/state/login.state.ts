import { User } from "src/app/entities/user";

export interface ILoginState {
    user: User | null;
    error: string | null,
    status: 'pending'|'loading'|'error'|'success'
}

export const initialLoginState: ILoginState = {
    user: null,
    status: "pending",
    error: "",
  };