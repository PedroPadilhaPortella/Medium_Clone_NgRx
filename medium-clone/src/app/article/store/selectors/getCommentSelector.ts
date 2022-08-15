import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { CommentState } from "../../types/CommentState.interface";

export const getCommentFeatureSelector = (state: AppState): CommentState => state.comment;

export const isLoadingSelector = createSelector(
    getCommentFeatureSelector,
    (CommentState: CommentState) => CommentState.isLoading,
);

export const errorSelector = createSelector(
    getCommentFeatureSelector,
    (CommentState: CommentState) => CommentState.error,
);

export const commentSelector = createSelector(
    getCommentFeatureSelector,
    (CommentState: CommentState) => CommentState.data,
);