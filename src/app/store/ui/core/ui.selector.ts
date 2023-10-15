import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UiState, uiFeatureName } from "../ui.state";

export const getUiFeatureState = createFeatureSelector<UiState>(
    uiFeatureName,
);

/**
 * * Select Loader
 */
export const selectLoader = createSelector(
    getUiFeatureState,
    ( state: UiState ) => state.loader,
);

/**
 * * Select Sidebar
 */
export const selectSidebar = createSelector(
    getUiFeatureState,
    ( state: UiState ) => state.sidebar,
);

/**
 * * Select Theme List
 */
export const selectThemeList = createSelector(
    getUiFeatureState,
    ( state: UiState ) => state.themeList,
);