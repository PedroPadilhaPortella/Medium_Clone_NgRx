import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { FeedState } from './../types/feedState.interface';

export const feedFeatureSelector = (state: AppState): FeedState => state.feed;

export const isLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedState) => feedState.isLoading,
);

export const errorSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedState) => feedState.error,
);

export const feedSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedState) => feedState.data,
);