import { createAction, props } from "@ngrx/store";
import { CivilStatusFormModel } from "../models/civil-status-form.model";
import { ErrorModel } from "src/app/shared/models/error.model";

export enum PagesActionTypes {
    // Civil Status
    CIVIL_STATUS_PAGES = '[Pages] Civil Status',
    CIVIL_STATUS_PAGES_SUCCESS = '[Pages] Civil Status Success',

    // Error
    ERROR_PAGES = '[Pages] Error',
    RESET_ERROR_PAGES = '[Pages] Reset Error',
}

/**
 * * Civil Status Actions
 */
export const civilStatus = createAction(
    PagesActionTypes.CIVIL_STATUS_PAGES,
    props<{ form: CivilStatusFormModel }>(),
);
export const civilStatusSuccess = createAction(
    PagesActionTypes.CIVIL_STATUS_PAGES_SUCCESS,
    props<{ res: Partial<string> }>(),
);

/**
 * * Error Actions
 */
export const errorPages = createAction(
    PagesActionTypes.ERROR_PAGES,
    props<{ res: ErrorModel }>(),
);
export const resetErrorPages = createAction(
    PagesActionTypes.RESET_ERROR_PAGES,
);