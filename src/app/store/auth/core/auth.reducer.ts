import { Action, createReducer, on } from "@ngrx/store";
import { AuthState, initialAuthState } from "../auth.state";
import * as actions from './auth.action';

const _authReducer = createReducer(
    initialAuthState,
    // Login
    on( actions.login, state => ({ ...state })),
    on( actions.loginSuccess, ( state, { res }) => ({
        ...state, user: res
    })),
    // Name
    on( actions.setName, ( state, { name }) => ({ ...state, name })),
    on( actions.resetName, state => ({ ...state, name: undefined })),
    // Error
    on( actions.authError, ( state, { res }) => ({
        ...state, error: res
    })),
    on( actions.resetAuthError, state => ({
        ...state, error: undefined,
    })),
);

export function authReducer(
    state: AuthState | undefined,
    action: Action,
) {
    return _authReducer( state, action );
}