import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureName } from "../auth.state";

export const getAuthFeatureState = createFeatureSelector<AuthState>(
    authFeatureName,
);

/**
 * * Select User
 */
export const selectUser = createSelector(
    getAuthFeatureState,
    ( state: AuthState ) => state.user
);

/**
 * * Select Name
 */
export const selectName = createSelector(
    getAuthFeatureState,
    ( state: AuthState ) => state.name,
);

/**
 * * Select Error
 */
export const selectAuthError = createSelector(
    getAuthFeatureState,
    ( state: AuthState ) => state.error,
);