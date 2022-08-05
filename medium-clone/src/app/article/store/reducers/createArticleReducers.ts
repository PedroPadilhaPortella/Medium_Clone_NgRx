import { Action, createReducer, on } from "@ngrx/store";
import { CreateArticleState } from '../../types/createArticleState.interface';
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "../actions/createArticle.action";

const initialState: CreateArticleState = {
    isSubmitting: false,
    validationErrors: null,
}

const createArticleReducer = createReducer(
    initialState,
    on(createArticleAction, (state): CreateArticleState => ({
        ...state,
        isSubmitting: true,
    })),
    on(createArticleSuccessAction, (state): CreateArticleState => ({
        ...state,
        isSubmitting: false
    })),
    on(createArticleFailureAction, (state, action): CreateArticleState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
);

export function createArticleReducers(state: CreateArticleState, action: Action) {
    return createArticleReducer(state, action);
}