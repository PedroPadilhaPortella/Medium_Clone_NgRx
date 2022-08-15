import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';

export const deleteCommentAction = createAction(
  ActionTypes.DELETE_COMMENT,
  props<{ slug: string, commentId: number }>()
);

export const deleteCommentSuccessAction = createAction(
    ActionTypes.DELETE_COMMENT_SUCCESS,
);

export const deleteCommentFailureAction = createAction(
    ActionTypes.DELETE_COMMENT_FAILURE,
);