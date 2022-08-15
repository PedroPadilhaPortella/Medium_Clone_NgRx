import { Action, createReducer, on } from "@ngrx/store";
import { CreateCommentState } from '../../types/createCommentState.interface';
import { createCommentAction, createCommentFailureAction, createCommentSuccessAction } from "../actions/createComment.action";

const initialState: CreateCommentState = {
    isSubmitting: false,
    validationErrors: null,
}

const createCommentReducer = createReducer(
    initialState,
    on(createCommentAction, (state): CreateCommentState => ({
        ...state,
        isSubmitting: true,
    })),
    on(createCommentSuccessAction, (state): CreateCommentState => ({
        ...state,
        isSubmitting: false,
    })),
    on(createCommentFailureAction, (state, action): CreateCommentState => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
);

export function createCommentReducers(state: CreateCommentState, action: Action) {
    return createCommentReducer(state, action);
}