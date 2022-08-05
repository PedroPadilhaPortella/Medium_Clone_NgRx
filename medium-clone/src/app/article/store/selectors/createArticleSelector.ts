import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { CreateArticleState } from "../../types/createArticleState.interface";

export const createArticleFeatureSelector = (state: AppState): CreateArticleState => state.createArticle;

export const isSubmittingSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleState: CreateArticleState) => createArticleState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
    createArticleFeatureSelector,
    (createArticleState: CreateArticleState) => createArticleState.validationErrors,
);