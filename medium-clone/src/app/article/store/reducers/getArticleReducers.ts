import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from '../actions/getArticle.action';
import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { ArticleState } from "../../types/articleState.interface";

const initialState: ArticleState = {
    data: null,
    isLoading: false,
    error: null,
}

const getArticleReducer = createReducer(
    initialState, 
    on(getArticleAction, (state): ArticleState => ({
        ...state,
        isLoading: true,
    })),
    on(getArticleSuccessAction, (state, action): ArticleState => ({
        ...state,
        isLoading: false,
        data: action.article
    })),
    on(getArticleFailureAction, (state): ArticleState => ({
        ...state,
        isLoading: false,
    })),

    on(routerNavigationAction, (): ArticleState => ({
        ...initialState
    })),
);

export function getArticlesReducers(state: ArticleState, action: Action) {
    return getArticleReducer(state, action);
}