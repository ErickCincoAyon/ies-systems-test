import { createAction, props } from "@ngrx/store";
import { LoginModel } from "../models/login.model";
import { UserModel } from "../models/user.model";
import { ErrorModel } from "src/app/shared/models/error.model";

export enum AuthActionTypes {
    LOGIN_AUTH = '[Auth] Login',
    LOGIN_AUTH_SUCCESS = '[Auth] Login Success',

    LOGOUT_AUTH = '[Auth] Logout',

    SET_NAME_AUTH = '[Auth] Set Name',
    RESET_NAME_AUTH = '[Auth] Reset Name',

    // Erorr
    ERROR_AUTH = '[Auth] Error',
    RESET_ERROR_AUTH = '[Auth] Reset Error',
}

/**
 * * Login Actions
 */
export const login = createAction(
    AuthActionTypes.LOGIN_AUTH,
    props<{ form: LoginModel }>(),
);
export const loginSuccess = createAction(
    AuthActionTypes.LOGIN_AUTH_SUCCESS,
    props<{ res: Partial<UserModel> }>(),
);
export const logout = createAction(
    AuthActionTypes.LOGOUT_AUTH,
);

/**
 * * Name Actions
 */
export const setName = createAction(
    AuthActionTypes.SET_NAME_AUTH,
    props<{ name: string }>(),
);
export const resetName = createAction(
    AuthActionTypes.RESET_NAME_AUTH,
);

/**
 * * Error Actions
 */
export const authError = createAction(
    AuthActionTypes.ERROR_AUTH,
    props<{ res: ErrorModel }>(),
);
export const resetAuthError = createAction(
    AuthActionTypes.RESET_ERROR_AUTH,
);