import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { CreateCommentState } from "../../types/createCommentState.interface";

export const createdCommentFeatureSelector = (state: AppState): CreateCommentState => state.createComment;

export const isSubmittingSelector = createSelector(
    createdCommentFeatureSelector,
    (createCommentState: CreateCommentState) => createCommentState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
    createdCommentFeatureSelector,
    (createCommentState: CreateCommentState) => createCommentState.validationErrors,
);