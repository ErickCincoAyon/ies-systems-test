import { ElementRef } from "@angular/core";
import { createAction, props } from "@ngrx/store";

export enum UiActionTypes {
    LOADER_ACTIVE = '[UI] Loader active',
    LOADER_INACTIVE = '[UI] Loader inactive',

    SIDEBAR_ACTIVE = '[UI] Sidebar active',
    SIDEBAR_INACTIVE = '[UI] Sidebar inactive',

    THEMELIST_ACTIVE = '[UI] Theme List Active',
    THEMELIST_INACTIVE = '[UI] Theme List Inactive'
}

/**
 * * Loader Actions
 */
export const loaderActive = createAction(
    UiActionTypes.LOADER_ACTIVE,
);
export const loaderInactive = createAction(
    UiActionTypes.LOADER_INACTIVE,
);

/**
 * * Sidebar Actions
 */
export const sidebarActive = createAction(
    UiActionTypes.SIDEBAR_ACTIVE,
    props<{ sidebar: ElementRef }>()
);
export const sidebarInactive = createAction(
    UiActionTypes.SIDEBAR_INACTIVE,
    props<{ sidebar: ElementRef }>()
);

/**
 * * Theme List Actions
 */
export const themeListActive = createAction(
    UiActionTypes.THEMELIST_ACTIVE,
    props<{ themeList: ElementRef }>()
);
export const themeListInactive = createAction(
    UiActionTypes.THEMELIST_INACTIVE,
    props<{ themeList: ElementRef }>()
);
