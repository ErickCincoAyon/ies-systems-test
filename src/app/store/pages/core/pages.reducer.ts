import { Action, createReducer, on } from "@ngrx/store";
import { PagesState, initialPagesState } from "../pages.state";
import * as actions from './pages.action';

const _pagesReducer = createReducer(
    initialPagesState,
    // Civil Status
    on( actions.civilStatus, state => ({ ...state })),
    on( actions.civilStatusSuccess, ( state, { res }) => ({
        ...state, message: res,
    })),
    // Error
    on( actions.errorPages, ( state, { res }) => ({
        ...state, error: res
    })),
    on( actions.resetErrorPages, state => ({
        ...state, error: undefined,
    })),
);

export function pagesReducer(
    state: PagesState | undefined,
    action: Action,
) {
    return _pagesReducer( state, action );
}