import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PagesState, pagesFeatureName } from "../pages.state";

export const getPagesFeatureState = createFeatureSelector<PagesState>(
    pagesFeatureName,
);

/**
 * * Select Message
 */
export const selectMessagePages = createSelector(
    getPagesFeatureState,
    ( state: PagesState ) => state.message,
);

/**
 * * Select Error
 */
export const selectErrorPages = createSelector(
    getPagesFeatureState,
    ( state: PagesState ) => state.error,
);