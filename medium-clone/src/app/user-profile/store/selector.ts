import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { UserProfileState } from "../types/userProfileState.interface";

export const userProfileFeatureSelector = (state: AppState): UserProfileState => state.userProfile;

export const userProfileSelector = createSelector(
    userProfileFeatureSelector,
    (userProfileState: UserProfileState) => userProfileState.data
);

export const isLoadingSelector = createSelector(
    userProfileFeatureSelector,
    (userProfileState: UserProfileState) => userProfileState.isLoading
);

export const errorSelector = createSelector(
    userProfileFeatureSelector,
    (userProfileState: UserProfileState) => userProfileState.error
);
