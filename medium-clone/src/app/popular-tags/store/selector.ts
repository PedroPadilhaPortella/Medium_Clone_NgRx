import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { PopularTagsState } from './../types/popularTagsState.interface';

export const popularTagsFeatureSelector = (state: AppState): PopularTagsState => state.popularTags;

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsState) => popularTagsState.data,
);

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsState) => popularTagsState.isLoading,
);

export const errorSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsState) => popularTagsState.error,
);
