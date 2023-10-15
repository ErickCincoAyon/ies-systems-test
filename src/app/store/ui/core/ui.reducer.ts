import { Action, createReducer, on } from "@ngrx/store";
import { UiState, initialUiState } from "../ui.state";
import * as actions from './ui.action';

const _uiReducer = createReducer(
    initialUiState,
    // Loader
    on( actions.loaderActive, state => ({ ...state, loader: true })),
    on( actions.loaderInactive, state => ({ ...state, loader: false })),
    // Sidebar
    on( actions.sidebarActive, state => ({ ...state, sidebar: true })),
    on( actions.sidebarInactive, state => ({ ...state, sidebar: false })),
    // Theme List
    on( actions.themeListActive, state => ({ ...state, themeList: true })),
    on( actions.themeListInactive, state => ({ ...state, themeList: false })),
);

export function uiReducer(
    state: UiState | undefined,
    action: Action,
) {
    return _uiReducer( state, action );
}