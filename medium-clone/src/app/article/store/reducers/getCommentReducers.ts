import { Action, createReducer, on } from "@ngrx/store";
import { CommentState } from '../../types/CommentState.interface';
import { getCommentAction, getCommentFailureAction, getCommentsSuccessAction } from '../actions/getComment.action';

const initialState: CommentState = {
    data: null,
    isLoading: false,
    error: null,
}

const getCommentReducer = createReducer(
    initialState, 
    on(getCommentAction, (state): CommentState => ({
        ...state,
        isLoading: true,
    })),
    on(getCommentsSuccessAction, (state, action): CommentState => ({
        ...state,
        isLoading: false,
        data: action.comments
    })),
    on(getCommentFailureAction, (state, action): CommentState => ({
        ...state,
        isLoading: false,
    })),
);

export function getCommentReducers(state: CommentState, action: Action) {
    return getCommentReducer(state, action);
}