import { Action, createReducer, on } from "@ngrx/store";
import { EditArticleState } from "../../types/editArticleState.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";
import { updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction } from "../actions/updateArticle.action";

const initialState: EditArticleState = {
    article: null,
    isLoading: false,
    isSubmitting: false,
    validationErrors: null,
}

const editArticleReducer = createReducer(
    initialState,
    
    on(getArticleAction, (state): EditArticleState => ({
        ...state,
        isLoading: true,
    })),
    on(getArticleSuccessAction, (state, action): EditArticleState => ({
        ...state,
        isLoading: false,
        article: action.article
    })),
    on(getArticleFailureAction, (state): EditArticleState => ({
        ...state,
        isLoading: false,
    })),

    on(updateArticleAction, (state): EditArticleState => ({
        ...state,
        isSubmitting: true,
    })),
    on(updateArticleSuccessAction, (state): EditArticleState => ({
        ...state,
        isSubmitting: false
    })),
    on(updateArticleFailureAction, (state, action): EditArticleState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
);

export function editArticleReducers(state: EditArticleState, action: Action) {
    return editArticleReducer(state, action);
}