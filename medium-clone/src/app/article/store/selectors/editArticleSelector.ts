import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/shared/types/appState.interface";
import { CreateArticleState } from "../../types/createArticleState.interface";
import { EditArticleState } from "../../types/editArticleState.interface";

export const editArticleFeatureSelector = (state: AppState): EditArticleState => state.editArticle;

export const articleSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: EditArticleState) => editArticleState.article,
);

export const isLoadingSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: EditArticleState) => editArticleState.isLoading,
);

export const isSubmittingSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: EditArticleState) => editArticleState.isSubmitting,
);

export const validationErrorsSelector = createSelector(
    editArticleFeatureSelector,
    (editArticleState: EditArticleState) => editArticleState.validationErrors,
);