import { createSelector } from "@ngrx/store";
import { ArticleState } from 'src/app/article/types/articleState.interface';
import { AppState } from "src/app/shared/types/appState.interface";

export const getArticleFeatureSelector = (state: AppState): ArticleState => state.article;

export const isLoadingSelector = createSelector(
    getArticleFeatureSelector,
    (articleState: ArticleState) => articleState.isLoading,
);

export const errorSelector = createSelector(
    getArticleFeatureSelector,
    (articleState: ArticleState) => articleState.error,
);

export const articleSelector = createSelector(
    getArticleFeatureSelector,
    (articleState: ArticleState) => articleState.data,
);