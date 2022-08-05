import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { AuthState } from "../../types/authState.interface";

export const authFeatureSelector = (state: AppState): AuthState => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: AuthState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
    authFeatureSelector,
    (authState: AuthState) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
    authFeatureSelector,
    (authState: AuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
    authFeatureSelector,
    (authState: AuthState) => authState.currentUser
);