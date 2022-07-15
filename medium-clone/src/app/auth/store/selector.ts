import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { AuthState } from "../types/authState.interface";

// export const authFeatureSelector = createFeatureSelector<AppState, AuthState>('auth')

export const authFeatureSelector = (state: AppState): AuthState => state.auth;

export const isSubmittingSelector = createSelector(
    authFeatureSelector, 
    (authState: AuthState) => authState.isSubmitting
);