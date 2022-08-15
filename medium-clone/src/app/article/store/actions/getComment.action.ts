import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/shared/types/comment.interface';
import { ActionTypes } from '../actionTypes';

export const getCommentAction = createAction(
  ActionTypes.GET_COMMENT,
  props<{ slug: string }>()
);

export const getCommentsSuccessAction = createAction(
    ActionTypes.GET_COMMENT_SUCCESS,
    props<{ comments: Comment[] }>()
);

export const getCommentFailureAction = createAction(
    ActionTypes.GET_COMMENT_FAILURE,
);