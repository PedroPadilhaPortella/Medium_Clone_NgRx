import { createSelector } from "@ngrx/store";
import { ArticleState } from 'src/app/article/types/articleState.interface';
import { AppState } from "src/app/shared/types/appState.interface";

export const articleFeatureSelector = (state: AppState): ArticleState => state.article;

export const isLoadingSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleState) => articleState.isLoading,
);

export const errorSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleState) => articleState.error,
);

export const articleSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleState) => articleState.data,
);